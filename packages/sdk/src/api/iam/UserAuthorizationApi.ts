/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { TokenWithDeviceCookieResponseV3 } from '@accelbyte/sdk/generated-public/iam/definitions/TokenWithDeviceCookieResponseV3'
import { OAuth20$ } from '@accelbyte/sdk/generated-public/iam/OAuth20$'
import { doRefreshSession, refreshWithLock } from '@accelbyte/sdk/interceptors/AuthInterceptors'
import { MFADataResponse } from '@accelbyte/sdk/models/TwoFA'
import { BrowserHelper } from '@accelbyte/sdk/utils/BrowserHelper'
import { CodeChallenge } from '@accelbyte/sdk/utils/CodeChallenge'
import { DesktopChecker } from '@accelbyte/sdk/utils/DesktopChecker'
import { Network } from '@accelbyte/sdk/utils/Network'
import { SdkDevice } from '@accelbyte/sdk/utils/SdkDevice'
import { UrlHelper } from '@accelbyte/sdk/utils/UrlHelper'
import { Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosError, AxiosResponse } from 'axios'
import platform from 'platform'
import { z } from 'zod'

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
  refreshToken?: string
}

export const LoginErrorParam = z.enum(['cancelled', 'login_session_expired'])
export type LoginErrorParam = z.TypeOf<typeof LoginErrorParam>

export class LoginErrorCancelled extends Error {}

export class LoginErrorExpired extends Error {}

export class LoginErrorUnknown extends Error {}

export class LoginErrorUnmatchedState extends Error {}

export class UserAuthorizationApi {
  /**
   * @internal
   */
  constructor(
    private readonly conf: SDKRequestConfig,
    private readonly namespace: string,
    private readonly cache = false,
    private readonly options: UserAuthorizationOptions
  ) {}

  /**
   * This method supports grant type:
   *      - Grant Type == `authorization_code`:
   *        &nbsp;&nbsp;&nbsp; It generates the user token by given the authorization
   *        code which generated in "/iam/v3/authenticate" API response. It should also pass
   *        in the redirect_uri, which should be the same as generating the
   *        authorization code request.
   *
   *      - Grant Type == `password`:
   *        &nbsp;&nbsp;&nbsp; The grant type to use for authenticating a user, whether it's by email / username and password combination
   *        or through platform.
   *
   *      - Grant Type == `refresh_token`:
   *        &nbsp;&nbsp;&nbsp; Used to get a new access token for a valid refresh token.
   *
   *      - Grant Type == `client_credentials`:
   *        &nbsp;&nbsp;&nbsp; It generates a token by checking the client credentials provided through Authorization header.
   *      ##Access Token Content
   *      Following is the access token’s content:
   *
   *      -
   *        __namespace__. It is the namespace the token was generated from.
   *
   *      -
   *        __display_name__. The display name of the sub. It is empty if the token is generated from the client credential
   *
   *      -
   *        __roles__. The sub’s roles. It is empty if the token is generated from the client credential
   *
   *      -
   *        __namespace_roles__. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace
   *
   *      -
   *        __permissions__. The sub or aud’ permissions
   *
   *      -
   *        __bans__. The sub’s list of bans. It is used by the IAM client for validating the token.
   *
   *      -
   *        __jflgs__. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:
   *
   *        - 1: Email Address Verified
   *        - 2: Phone Number Verified
   *        - 4: Anonymous
   *        - 8: Suspicious Login
   *
   *
   *      -
   *        __aud__. The aud is the targeted resource server.
   *
   *      -
   *        __iat__. The time the token issues at. It is in Epoch time format
   *
   *      -
   *        __exp__. The time the token expires. It is in Epoch time format
   *
   *      -
   *        __client_id__. The UserID. The sub is omitted if the token is generated from client credential
   *
   *      -
   *        __scope__. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings
   *
   *
   *      ##Bans
   *      The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.
   *      ##Device Cookie Validation
   *      __For grant type "password" only__
   *      Device Cookie is used to protect the user account from brute force login attack,
   *      [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies)
   *      This method will read device cookie from request header __Auth-Trust-Id__. If device cookie not found, it will generate a new one and set it into response body __auth_trust_id__ when successfully login.
   *      ##Track Login History
   *      This method will track login history to detect suspicious login activity, please provide __Device-Id__ (alphanumeric) in request header parameter otherwise it will set to "unknown".
   *      Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default"
   *             ##2FA remember device
   *             To remember device for 2FA, should provide cookie: device_token or header: Device-Token
   *      action code: 10703
   */
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

    const data: Parameters<OAuth20$['postIamV3OauthToken']>[0] = {
      grant_type: 'authorization_code',
      code,
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

    const { mfa_token: mfaToken, factors, default_factor: defaultFactor, email } = errorResponse.data
    const result = { mfaToken, factors, defaultFactor, email }
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
    searchParams.append('createHeadless', 'false')

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

  getCodeChallenge = () => {
    return CodeChallenge.generateChallenge()
  }

  refreshToken = (): Promise<Partial<TokenWithDeviceCookieResponseV3> | false> => {
    const { clientId, refreshToken } = this.options
    if (DesktopChecker.isDesktopApp()) {
      return Promise.resolve().then(doRefreshSession({ axiosConfig: this.conf, clientId, refreshToken }))
    }
    return refreshWithLock({ axiosConfig: this.conf, clientId })
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
