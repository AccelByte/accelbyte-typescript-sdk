/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { TokenResponseV3 } from '@od-web-sdk/generated-public/iam/definitions/TokenResponseV3'
import { OAuth20$ } from '@od-web-sdk/generated-public/iam/OAuth20$'
import { doRefreshSession, refreshWithLock } from '@od-web-sdk/interceptors/AuthInterceptors'
import { MFADataResponse } from '@od-web-sdk/models/TwoFA'
import { BrowserHelper } from '@od-web-sdk/utils/BrowserHelper'
import { CodeChallenge } from '@od-web-sdk/utils/CodeChallenge'
import { Network } from '@od-web-sdk/utils/Network'
import { SdkDevice } from '@od-web-sdk/utils/SdkDevice'
import { UrlHelper } from '@od-web-sdk/utils/UrlHelper'
import { Validate } from '@od-web-sdk/utils/Validate'
import { AxiosError, AxiosResponse } from 'axios'
import platform from 'platform'
import { z } from 'zod'

const AUTHORIZE_URL = '/iam/v3/oauth/authorize'
export const MFA_DATA_STORAGE_KEY = 'mfaData'

export interface MatchReceivedStateResult {
  error: unknown | null
  result: { payload: string; codeVerifier: string } | null
}

export const TWOFA_PAGE = z.enum(['authenticator', 'backupCode', 'options', 'verify'])
export type TWOFA_PAGE = z.TypeOf<typeof TWOFA_PAGE>

// ts-prune-ignore-next
export interface MFAData {
  mfaToken: string
  factors: string[]
  defaultFactor: TWOFA_PAGE
}

export interface UserAuthorizationOptions {
  clientId: string
  redirectURI: string
  baseURL: string
  refreshToken?: string
  isDesktopApp?: boolean
}

export const LoginErrorParam = z.enum(['cancelled', 'login_session_expired'])
export type LoginErrorParam = z.TypeOf<typeof LoginErrorParam>

export class LoginErrorCancelled extends Error {}
export class LoginErrorExpired extends Error {}
export class LoginErrorUnknown extends Error {}
export class LoginErrorUnmatchedState extends Error {}

export class UserAuthorization {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true, private options: UserAuthorizationOptions) {}

  newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace, this.cache)
  }

  loginWithAuthorizationCode = async ({ code, codeVerifier }: { code: string; codeVerifier: string }) => {
    const deviceId = SdkDevice.getDeviceId()

    Network.setDeviceTokenCookie()
    const config = {
      ...this.conf,
      headers: {
        'Device-Id': deviceId,
        'Device-Name': platform.name ? platform.name.toString() : '',
        'Device-Os': platform.os ? platform.os.toString() : '',
        'Device-Type': SdkDevice.getType()
      }
    }
    const axios = Network.create(config)

    const data = {
      grant_type: 'authorization_code',
      code: code,
      code_verifier: codeVerifier,
      client_id: this.options.clientId,
      redirect_uri: this.options.redirectURI
    }
    const result = await new OAuth20$(axios, this.namespace, this.cache).postIamV3OauthToken(data)
    // const result = await OAuth20$.postIamV3OauthToken(axios, data)

    const errorResponse = (isAxiosError(result.error) && result.error.response) as AxiosResponse
    const mfaData = this.getMfaDataFromError(errorResponse)

    if (result.error && !mfaData?.mfaToken) throw result.error
    Network.removeDeviceTokenCookie()
    CodeChallenge.clear()
    return { ...result, mfaData }
  }

  getMfaDataFromError = (errorResponse: AxiosResponse) => {
    const doesMFADataExist = Validate.safeParse(errorResponse.data, MFADataResponse)
    if (!doesMFADataExist) return

    // eslint-disable-next-line camelcase
    const { mfa_token, factors, default_factor } = errorResponse.data
    const result = { mfaToken: mfa_token, factors, defaultFactor: default_factor }
    if (BrowserHelper.isOnBrowser()) {
      localStorage.setItem(MFA_DATA_STORAGE_KEY, JSON.stringify(result))
    }
    return result
  }

  getMfaDataFromStorage = () => {
    const storedMFAData = BrowserHelper.isOnBrowser() && localStorage.getItem(MFA_DATA_STORAGE_KEY)
    return storedMFAData ? JSON.parse(storedMFAData) : null
  }

  removeMfaDataFromStorage = () => {
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
  }

  matchReceivedState(maybeSentState: string): MatchReceivedStateResult {
    const sentStateResult = CodeChallenge.parseSentState(maybeSentState)
    if (sentStateResult.error) return { error: sentStateResult.error, result: null }

    const storedStateResult = CodeChallenge.load()
    if (storedStateResult.error) return { error: storedStateResult.error, result: null }

    const sentState = sentStateResult.sentState
    const storedState = storedStateResult.storedState

    if (sentState.csrf !== storedState.csrf) return { error: null, result: null }
    return {
      error: null,
      result: {
        payload: sentState.payload,
        codeVerifier: storedState.codeVerifier
      }
    }
  }

  deduceLoginError = (error: string) => {
    switch (error) {
      case LoginErrorParam.Enum.login_session_expired:
        return new LoginErrorExpired()
      case LoginErrorParam.Enum.cancelled:
        return new LoginErrorCancelled()
      default:
        return new LoginErrorUnknown()
    }
  }

  exchangeAuthorizationCode = async ({ code, error, state }: { code?: string | null; error?: string | null; state?: string | null }) => {
    if (error) {
      throw this.deduceLoginError(error)
    }
    if (!code || !state) return null

    const { result, error: stateError } = this.matchReceivedState(state)

    if (stateError) {
      console.error('unmatched state error: ', stateError)
      throw new LoginErrorUnmatchedState()
    }
    if (!result) return null

    const { payload, codeVerifier } = result

    const loginResult = await this.loginWithAuthorizationCode({
      code,
      codeVerifier
    })

    let returnPath

    if (payload) {
      const statePayload = AuthorizationCodeExchangeStateHelper.readJSONString(payload)
      if (statePayload !== null) {
        returnPath = statePayload.path
      }
    }

    return {
      response: loginResult.response,
      mfaData: loginResult.mfaData,
      returnPath
    }
  }

  createLoginURL = (returnPath?: string | null, targetAuthPage?: string): string => {
    const { verifier, challenge } = CodeChallenge.generateChallenge()
    const csrf = CodeChallenge.generateCsrf()
    const storedState = {
      codeVerifier: verifier,
      csrf
    }
    CodeChallenge.save(storedState)

    const sentState = {
      csrf,
      payload: returnPath ? AuthorizationCodeExchangeStateHelper.toJSONString({ path: returnPath }) : null
    }

    const searchParams = new URLSearchParams()
    searchParams.append('response_type', 'code')
    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.redirectURI)
    searchParams.append('state', CodeChallenge.stringifySentState(sentState))
    searchParams.append('code_challenge', challenge)
    searchParams.append('code_challenge_method', 'S256')
    searchParams.append('createHeadless', 'false')

    if (targetAuthPage) {
      searchParams.append('target_auth_page', targetAuthPage)
    }

    const url = new URL(UrlHelper.combineURLPaths(this.options.baseURL, `${AUTHORIZE_URL}?${searchParams.toString()}`))

    return url.toString()
  }

  createForgotPasswordURL = (): string => {
    const { verifier, challenge } = CodeChallenge.generateChallenge()
    const csrf = CodeChallenge.generateCsrf()
    const storedState = {
      codeVerifier: verifier,
      csrf
    }
    CodeChallenge.save(storedState)

    const sentState = {
      csrf,
      payload: null
    }

    const searchParams = new URLSearchParams()
    searchParams.append('response_type', 'code')
    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.redirectURI)
    searchParams.append('state', CodeChallenge.stringifySentState(sentState))
    searchParams.append('code_challenge', challenge)
    searchParams.append('code_challenge_method', 'S256')
    searchParams.append('target_auth_page', `forgot-password`)
    searchParams.append('createHeadless', 'false')

    const url = new URL(UrlHelper.combineURLPaths(this.options.baseURL, `${AUTHORIZE_URL}?${searchParams.toString()}`))

    return url.toString()
  }

  getCodeChallenge = () => {
    return CodeChallenge.generateChallenge()
  }

  refreshToken = (): Promise<Partial<TokenResponseV3> | false> => {
    const { isDesktopApp, clientId, refreshToken } = this.options
    if (isDesktopApp) {
      return Promise.resolve().then(doRefreshSession({ axiosConfig: this.conf, clientId, isDesktopApp, refreshToken }))
    }
    return refreshWithLock({ axiosConfig: this.conf, clientId })
  }
}

function isAxiosError<TAxiosErrorData = any>(error: unknown): error is AxiosError<TAxiosErrorData> {
  return !!error && !!(error as AxiosError).config
}

const AuthorizationCodeExchangeState = z.object({
  path: z.string().optional()
})

type AuthorizationCodeExchangeState = z.infer<typeof AuthorizationCodeExchangeState>

export class AuthorizationCodeExchangeStateHelper {
  static fromPath(path: string): AuthorizationCodeExchangeState {
    return { path }
  }

  static toJSONString(state: AuthorizationCodeExchangeState) {
    return JSON.stringify(state)
  }

  static readJSONString(jsonString: string): AuthorizationCodeExchangeState | null {
    try {
      const parsedJsonString = JSON.parse(jsonString)
      return AuthorizationCodeExchangeState.parse(parsedJsonString)
    } catch (error) {
      return null
    }
  }
}
