/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { Interceptor } from '../Types'
import { DesktopChecker } from '../utils/DesktopChecker'
import { Network } from '../utils/Network'
import { RefreshSession } from '../utils/RefreshSession'
import { OAuth20$, OAuth20V4$, TokenWithDeviceCookieResponseV3 } from './AuthInterceptorDeps'

const REFRESH_EXPIRY = 1000
const REFRESH_EXPIRY_UPDATE_RATE = 500
const REFRESH_EXPIRY_CHECK_RATE = 1000

enum GrantTokenUrls {
  GRANT_TOKEN = '/iam/v3/oauth/token',
  GRANT_TOKEN_V4 = '/iam/v4/oauth/token'
}

enum LoginUrls {
  REVOKE = '/iam/v3/oauth/revoke'
}

type GrantTokenUrlString = `${GrantTokenUrls}`

type RefreshArgs = {
  axiosConfig: AxiosRequestConfig
  refreshToken?: string
  clientId: string
  tokenUrl?: GrantTokenUrlString
}

const noOp = () => {}

export class RefreshToken {
  private config: RefreshArgs
  private interceptors: Interceptor[]

  constructor({ config, interceptors }: { config: RefreshArgs; interceptors?: Interceptor[] }) {
    this.config = config
    this.interceptors = interceptors || []
  }

  // Return Promise<true> if refresh in any tab is successful;
  runWithLock = (): Promise<Partial<TokenWithDeviceCookieResponseV3> | false> => {
    //
    if (RefreshSession.isLocked()) {
      return Promise.resolve().then(async () => {
        // This block is executed when other tab / request is refreshing
        while (RefreshSession.isLocked()) {
          await RefreshSession.sleepAsync(REFRESH_EXPIRY_CHECK_RATE)
        }
        return {}
      })
    }

    RefreshSession.lock(REFRESH_EXPIRY)
    let isLocallyRefreshingToken = true

    ;(async () => {
      // eslint-disable-next-line no-unmodified-loop-condition
      while (isLocallyRefreshingToken) {
        RefreshSession.lock(REFRESH_EXPIRY)
        await RefreshSession.sleepAsync(REFRESH_EXPIRY_UPDATE_RATE)
      }
    })()

    return Promise.resolve()
      .then(() => this.run())
      .finally(() => {
        isLocallyRefreshingToken = false
        RefreshSession.unlock()
      })
  }

  run = async () => {
    const { axiosConfig, refreshToken } = this.config
    // we need this to check if app use “withCredentials: false” and don’t have refreshToken it should return false,
    // because we track it as a logout user, if not do this even user logout on the desktop app (that use withCredentials: false)
    // will automatically login with refreshSession
    if (DesktopChecker.isDesktopApp() && !axiosConfig.withCredentials && !refreshToken) {
      return false
    }

    const result = await this.refreshToken()
    if (result.error) {
      return false
    }

    return result.response.data
  }

  refreshToken = () => {
    const { axiosConfig, refreshToken, clientId, tokenUrl } = this.config
    const config = {
      ...axiosConfig,
      /**
       * Ideally `withCredentials` should be `true` to make sure that
       * cookies always included when refreshing token
       * especially on cross-origin requests.
       * But if `refreshToken` is provided (e.g. from Launcher),
       * we can set it to false and send refresh_token via payload.
       */
      withCredentials: !refreshToken,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:`).toString('base64')}`
      }
    }
    const axios = Network.create(config)

    for (const interceptor of this.interceptors) {
      if (interceptor.type === 'request') {
        axios.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axios.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
      }
    }

    const payload = {
      refresh_token: refreshToken || undefined,
      client_id: clientId,
      grant_type: 'refresh_token'
    } as const

    if (tokenUrl === GrantTokenUrls.GRANT_TOKEN_V4) {
      return new OAuth20V4$(axios).postOauthToken_v4(payload)
    }

    const oauth20 = new OAuth20$(axios)
    return oauth20.postOauthToken(payload)
  }
}

const refreshComplete = (
  error: AxiosError,
  tokenResponse: Partial<TokenWithDeviceCookieResponseV3> | false,
  onSessionExpired: (() => void) | undefined,
  axiosConfig: AxiosRequestConfig,
  errorConfig: AxiosRequestConfig
) => {
  //
  if (tokenResponse) {
    const { access_token } = tokenResponse

    // desktop
    if (!axiosConfig.withCredentials && access_token) {
      return axios({
        ...errorConfig,
        headers: {
          ...errorConfig.headers,
          Authorization: `Bearer ${access_token}`
        }
      })
      // web
    } else {
      return axios(errorConfig)
    }
  }

  if (onSessionExpired) {
    onSessionExpired()
  }
  throw error
}

type SessionExpiredInterceptorOptions = {
  /**
   * The client ID used by the SDK, obtained from the Admin Portal under OAuth Clients.
   */
  clientId: string

  /**
   * An optional array of URLs that should be ignored when handling session expiration.
   * Default to `['/iam/v3/oauth/token', '/iam/v4/oauth/token', '/iam/v3/oauth/revoke']`
   */
  expectedErrorUrls?: string[]

  /**
   * A callback function that retrieves the current refresh token.
   */
  getRefreshToken?: () => string | undefined

  /**
   * The URL endpoint for obtaining a new token. Defaults to `'/iam/v3/oauth/token'`.
   */
  tokenUrl?: GrantTokenUrlString
  /**
   * A callback function triggered when the session has expired.
   */
  onSessionExpired: () => void

  /**
   * A callback function triggered when successfully get new session.
   */
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
}

export const createAuthInterceptor = ({
  clientId,
  onSessionExpired,
  onGetUserSession,
  expectedErrorUrls = Object.values({ ...LoginUrls, ...GrantTokenUrls }),
  getRefreshToken,
  tokenUrl = GrantTokenUrls.GRANT_TOKEN
}: SessionExpiredInterceptorOptions): Interceptor => {
  return {
    type: 'response',
    name: 'session-expired',
    onError: e => {
      const error = e as AxiosError
      const { config, response } = error

      if (axios.isCancel(error)) {
        // expected case, exit
        return Promise.reject(error)
      }

      if (!response) {
        console.warn(`sdk:ERR_INTERNET_DISCONNECTED ${config?.baseURL}${config?.url}. ${(error as AxiosError).message}\n`)
      }

      if (response?.status === 401) {
        const { url } = config || {}
        const axiosConfig = config as AxiosRequestConfig
        const refreshToken = getRefreshToken?.()

        // expected business case, exit
        if (!url || (url && expectedErrorUrls.includes(url))) {
          return Promise.reject(error)
        }

        const refresh = new RefreshToken({
          config: { axiosConfig, clientId, refreshToken, tokenUrl },
          interceptors: [
            createRefreshSessionInterceptor({ tokenUrl }),
            createGetSessionInterceptor({ onGetUserSession: onGetUserSession || noOp, tokenUrl })
          ]
        })

        // need to lock on the desktop as well to prevent multiple token request
        return refresh.runWithLock().then(tokenResponse => {
          return refreshComplete(error, tokenResponse, onSessionExpired, axiosConfig, config || {})
        })
      }

      return Promise.reject(error)
    }
  }
}

type RefreshSessioNInterceptorOptions = {
  /**
   * The URL endpoint for obtaining a new token. Defaults to `'/iam/v3/oauth/token'`.
   */
  tokenUrl?: GrantTokenUrlString
}

export const createRefreshSessionInterceptor = (options?: RefreshSessioNInterceptorOptions): Interceptor => {
  const { tokenUrl = GrantTokenUrls.GRANT_TOKEN } = options || {}

  return {
    type: 'request',
    name: 'refresh-session',
    onError: error => Promise.reject(error),
    onRequest: async config => {
      // need to lock on the desktop as well to sleep other request before refresh session is done
      const isRefreshTokenUrl = config.url === tokenUrl
      // eslint-disable-next-line no-unmodified-loop-condition
      while (RefreshSession.isLocked() && !isRefreshTokenUrl) {
        await RefreshSession.sleepAsync(200)
      }
      return config
    }
  }
}

type GetSessionInterceptorOptions = {
  /**
   * The URL endpoint for obtaining a new token. Defaults to `'/iam/v3/oauth/token'`.
   */
  tokenUrl?: GrantTokenUrlString

  /**
   * A callback function triggered when successfully get new session.
   */
  onGetUserSession: (accessToken: string, refreshToken: string) => void
}

export const createGetSessionInterceptor = ({
  tokenUrl = GrantTokenUrls.GRANT_TOKEN,
  onGetUserSession
}: GetSessionInterceptorOptions): Interceptor => ({
  type: 'response',
  name: 'get-session',
  onError: error => Promise.reject(error),
  onSuccess: response => {
    const { config, status } = response

    if (config.url === tokenUrl && status === 200) {
      // @ts-ignore
      const { access_token, refresh_token } = response.data as TokenWithDeviceCookieResponseV3

      if (access_token) {
        onGetUserSession(access_token, refresh_token ?? '')
      }
    }

    return response
  }
})
