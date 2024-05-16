/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import {
  AccelbyteSDK,
  ApiArgs,
  BrowserHelper,
  DesktopChecker,
  doRefreshSession,
  Network,
  refreshWithLock,
  SdkDevice,
  SDKRequestConfig,
  UrlHelper,
  Validate
} from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
import platform from 'platform'
import { z } from 'zod'
import { MFADataResponse } from '../models/TwoFA.js'
import { CodeChallenge } from './CodeChallenge.js'
import { OAuth20$ } from '../../generated-public/endpoints/OAuth20$'
import { TokenWithDeviceCookieResponseV3 } from '../../generated-definitions/TokenWithDeviceCookieResponseV3'
import { OAuth20Extension$ } from '../../generated-public/endpoints/OAuth20Extension$'
import { mandatoryAccountUpgradeLocalStorageName } from '../constants.js'

const AUTHORIZE_URL = '/iam/v3/oauth/authorize'
export const MFA_DATA_STORAGE_KEY = 'mfaData'

interface MatchReceivedStateResult {
  error: unknown | null
  result: { payload: string; codeVerifier: string } | null
}

export const TWOFA_PAGE = z.enum(['authenticator', 'backupCode', 'email', 'options', 'verify'])
export type TWOFA_PAGE = z.TypeOf<typeof TWOFA_PAGE>

// ts-prune-ignore-next
export interface MFAData {
  mfaToken: string
  factors: string[]
  defaultFactor: TWOFA_PAGE
  email: string
}

interface UserAuthorizationOptions {
  clientId: string
  redirectURI: string
  baseURL: string
}

export const LoginErrorParam = z.enum(['cancelled', 'login_session_expired'])
export type LoginErrorParam = z.TypeOf<typeof LoginErrorParam>

export class LoginErrorCancelled extends Error {}

export class LoginErrorExpired extends Error {}

export class LoginErrorUnknown extends Error {}

export class LoginErrorUnmatchedState extends Error {}

export class IamUserAuthorizationClient {
  conf: SDKRequestConfig
  namespace: string
  options: UserAuthorizationOptions

  constructor(private sdk: AccelbyteSDK, args?: ApiArgs) {
    const { config, namespace, baseURL, clientId, redirectURI } = sdk.assembly()
    this.conf = config
    this.namespace = args?.namespace || namespace
    this.options = {
      baseURL,
      clientId,
      redirectURI
    }
  }

  loginWithAuthorizationCode = async ({ code, codeVerifier, deviceId }: { code: string; codeVerifier: string; deviceId?: string }) => {
    Network.setDeviceTokenCookie()
    const config = {
      ...this.conf,
      headers: {
        'Device-Name': platform.name ? platform.name.toString() : '',
        'Device-Os': platform.os ? platform.os.toString() : '',
        'Device-Type': SdkDevice.getType(),
        ...((BrowserHelper.isOnBrowser() || deviceId) && { 'Device-Id': deviceId || SdkDevice.getDeviceId() }),
        ...this.conf.headers
      }
    }
    const axios = Network.create(config)

    const data: Parameters<OAuth20$['postOauthToken']>[0] = {
      grant_type: 'authorization_code',
      code,
      code_verifier: codeVerifier,
      client_id: this.options.clientId,
      redirect_uri: this.options.redirectURI
    }
    const result = await new OAuth20$(axios, this.namespace).postOauthToken(data)

    const errorResponse = (isAxiosError(result.error) && result.error.response) as AxiosResponse
    const mfaData = IamUserAuthorizationClient.getMfaDataFromError(errorResponse)

    if (result.error && !mfaData?.mfaToken) throw result.error
    Network.removeDeviceTokenCookie()
    CodeChallenge.clear()
    return { ...result, mfaData }
  }

  loginWithPasswordAuthorization = async ({ username, password, deviceId }: { username: string; password: string; deviceId?: string }) => {
    const axios = Network.create({
      ...this.conf,
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.options.clientId}:`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Device-Name': platform.name ? platform.name.toString() : '',
        'Device-Os': platform.os ? platform.os.toString() : '',
        'Device-Type': SdkDevice.getType(),
        ...((BrowserHelper.isOnBrowser() || deviceId) && { 'Device-Id': deviceId || SdkDevice.getDeviceId() })
      }
    })

    const data: Parameters<OAuth20$['postOauthToken']>[0] = {
      password,
      username,
      grant_type: 'password',
      client_id: this.options.clientId
    }
    const result = await new OAuth20$(axios, this.namespace).postOauthToken(data)

    const errorResponse = (isAxiosError(result.error) && result.error.response) as AxiosResponse
    const mfaData = IamUserAuthorizationClient.getMfaDataFromError(errorResponse)

    if (result.error && !mfaData?.mfaToken) throw result.error
    return { ...result, mfaData }
  }

  static getMfaDataFromError = (errorResponse: AxiosResponse) => {
    const doesMFADataExist = Validate.safeParse(errorResponse.data, MFADataResponse)
    if (!doesMFADataExist) return

    const { mfa_token: mfaToken, factors, default_factor: defaultFactor, email } = errorResponse.data
    const result = { mfaToken, factors, defaultFactor, email }
    if (BrowserHelper.isOnBrowser()) {
      localStorage.setItem(MFA_DATA_STORAGE_KEY, JSON.stringify(result))
    }
    return result
  }

  static getMfaDataFromStorage = () => {
    const storedMFAData = BrowserHelper.isOnBrowser() && localStorage.getItem(MFA_DATA_STORAGE_KEY)
    return storedMFAData ? JSON.parse(storedMFAData) : null
  }

  static removeMfaDataFromStorage = () => {
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
  }

  static matchReceivedState = (maybeSentState: string): MatchReceivedStateResult => {
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

  static deduceLoginError = (error: string) => {
    switch (error) {
      case LoginErrorParam.Enum.login_session_expired:
        return new LoginErrorExpired()
      case LoginErrorParam.Enum.cancelled:
        return new LoginErrorCancelled()
      default:
        return new LoginErrorUnknown()
    }
  }

  loginWithCodeAuthorization = async ({ code }: { code: string }) => {
    Network.setDeviceTokenCookie()
    const config = {
      ...this.conf,
      headers: {
        ...this.conf.headers,
        Authorization: `Basic ${Buffer.from(`${this.options.clientId}:`).toString('base64')}`
      }
    }
    const axios = Network.create(config)
    const data: Parameters<OAuth20Extension$['postTokenExchange']>[0] = {
      code
    }
    const result = await new OAuth20Extension$(axios, this.namespace).postTokenExchange(data)
    const errorResponse = (isAxiosError(result.error) && result.error.response) as AxiosResponse
    const mfaData = IamUserAuthorizationClient.getMfaDataFromError(errorResponse)

    if (result.error) throw result.error

    Network.removeDeviceTokenCookie()
    CodeChallenge.clear()
    return { ...result, mfaData }
  }

  exchangeSSOAuthorizationCode = async ({ code, error }: { code?: string | null; error?: string | null }) => {
    if (error) {
      throw IamUserAuthorizationClient.deduceLoginError(error)
    }
    if (!code) return null

    const loginResult = await this.loginWithCodeAuthorization({
      code
    })

    return {
      response: loginResult.response,
      mfaData: loginResult.mfaData,
      returnPath: null
    }
  }

  exchangeAuthorizationCode = async ({ code, error, state }: { code?: string | null; error?: string | null; state?: string | null }) => {
    if (error) {
      throw IamUserAuthorizationClient.deduceLoginError(error)
    }
    if (!code || !state) return null

    const { result, error: stateError } = IamUserAuthorizationClient.matchReceivedState(state)

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

  createLoginURL = (returnPath?: string | null, targetAuthPage?: string, oneTimeLinkCode?: string): string => {
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

    const searchParams = this.getSearchParams(sentState, challenge)

    let isMandatoryThirdPartyAccountUpgradeOrLinkEnabled = ''
    if (BrowserHelper.isOnBrowser()) {
      isMandatoryThirdPartyAccountUpgradeOrLinkEnabled = localStorage.getItem(mandatoryAccountUpgradeLocalStorageName)?.toLowerCase() || ''
    }
    const createHeadless: boolean = isMandatoryThirdPartyAccountUpgradeOrLinkEnabled === 'false'
    searchParams.append('createHeadless', createHeadless.toString())

    if (targetAuthPage) {
      searchParams.append('target_auth_page', targetAuthPage)
    }

    if (oneTimeLinkCode) {
      searchParams.append('oneTimeLinkCode', oneTimeLinkCode)
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

    const searchParams = this.getSearchParams(sentState, challenge)
    searchParams.append('target_auth_page', `forgot-password`)
    searchParams.append('createHeadless', 'false')

    const url = new URL(UrlHelper.combineURLPaths(this.options.baseURL, `${AUTHORIZE_URL}?${searchParams.toString()}`))

    return url.toString()
  }

  /**
   * @internal
   */
  refreshToken = (): Promise<Partial<TokenWithDeviceCookieResponseV3> | false> => {
    const { clientId, refreshToken } = this.sdk.assembly()
    if (DesktopChecker.isDesktopApp()) {
      return Promise.resolve().then(doRefreshSession({ axiosConfig: this.conf, clientId, refreshToken }))
    }
    return refreshWithLock({ axiosConfig: this.conf, clientId, refreshToken })
  }

  private getSearchParams = (sentState, challenge): URLSearchParams => {
    const searchParams = new URLSearchParams()
    searchParams.append('response_type', 'code')
    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.redirectURI)
    searchParams.append('state', CodeChallenge.stringifySentState(sentState))
    searchParams.append('code_challenge', challenge)
    searchParams.append('code_challenge_method', 'S256')
    return searchParams
  }
}

function isAxiosError<TAxiosErrorData = any>(error: unknown): error is AxiosError<TAxiosErrorData> {
  return !!error && !!(error as AxiosError).config
}

const AuthorizationCodeExchangeState = z.object({
  path: z.string().optional()
})

interface AuthorizationCodeExchangeState extends z.infer<typeof AuthorizationCodeExchangeState> {}

class AuthorizationCodeExchangeStateHelper {
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
