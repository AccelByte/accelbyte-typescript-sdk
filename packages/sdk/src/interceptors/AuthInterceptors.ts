/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { injectRequestInterceptors, injectResponseInterceptors, Network } from '../utils/Network'
import { RefreshSession } from '../utils/RefreshSession'
import { OAuth20$, TokenWithDeviceCookieResponseV3 } from './AuthInterceptorDeps'
import { DesktopChecker } from '../utils/DesktopChecker'

const REFRESH_EXPIRY = 1000
const REFRESH_EXPIRY_UPDATE_RATE = 500
const REFRESH_EXPIRY_CHECK_RATE = 1000

enum LoginUrls {
  GRANT_TOKEN = '/iam/v3/oauth/token',
  REVOKE = '/iam/v3/oauth/revoke'
}

type RefreshArgs = {
  axiosConfig: AxiosRequestConfig
  refreshToken?: string
  clientId: string
}

/* eslint camelcase: 0 */
const refreshSession = ({ axiosConfig, refreshToken, clientId }: RefreshArgs) => {
  const config = {
    ...axiosConfig,
    withCredentials: false,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:`).toString('base64')}`
    }
  }
  const axios = Network.create(config)

  const payload = {
    refresh_token: refreshToken || undefined,
    client_id: clientId,
    grant_type: 'refresh_token'
  } as const

  const oauth20 = new OAuth20$(axios, 'NAMESPACE-NOT-REQUIRED')
  return oauth20.postOauthToken(payload)
}

// Return Promise<true> if refresh in any tab is successful;
export const refreshWithLock = ({
  axiosConfig,
  refreshToken,
  clientId
}: RefreshArgs): Promise<Partial<TokenWithDeviceCookieResponseV3> | false> => {
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
    .then(doRefreshSession({ axiosConfig, clientId, refreshToken }))
    .finally(() => {
      isLocallyRefreshingToken = false
      RefreshSession.unlock()
    })
}

export const doRefreshSession =
  ({ axiosConfig, clientId, refreshToken }: RefreshArgs) =>
  async () => {
    // we need this to check if app use “withCredentials: false” and don’t have refreshToken it should return false,
    // because we track it as a logout user, if not do this even user logout on the desktop app (that use withCredentials: false)
    // will automatically login with refreshSession
    if (DesktopChecker.isDesktopApp() && !axiosConfig.withCredentials && !refreshToken) {
      return false
    }
    const result = await refreshSession({ axiosConfig, clientId, refreshToken })
    if (result.error) {
      return false
    }
    return result.response.data
  }

export const injectAuthInterceptors = (
  clientId: string,
  getSDKConfig: () => AxiosRequestConfig,
  onSessionExpired?: () => void,
  onGetUserSession?: (accessToken: string, refreshToken: string) => void,
  getRefreshToken?: () => string | undefined
) => {
  // ===== request
  injectRequestInterceptors(
    async config => {
      // need to lock on the desktop as well to sleep other request before refresh session is done
      const isRefreshTokenUrl = config.url === LoginUrls.GRANT_TOKEN
      // eslint-disable-next-line no-unmodified-loop-condition
      while (RefreshSession.isLocked() && !isRefreshTokenUrl) {
        await RefreshSession.sleepAsync(200)
      }
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
  // ===== response
  injectResponseInterceptors(
    response => {
      const { config, status } = response

      if (config.url === LoginUrls.GRANT_TOKEN && status === 200 && onGetUserSession) {
        const { access_token, refresh_token } = response.data as TokenWithDeviceCookieResponseV3

        if (access_token) {
          onGetUserSession(access_token, refresh_token ?? '')
        }
      }

      return response
    },
    async (error: AxiosError) => {
      const { config, response } = error

      if (axios.isCancel(error)) {
        // expected case, exit
        throw error
      }

      if (!response) {
        console.warn(`sdk:ERR_INTERNET_DISCONNECTED ${config?.baseURL}${config?.url}. ${(error as AxiosError).message}\n`)
      }

      if (response?.status === 401) {
        const { url } = config || {}
        const axiosConfig = getSDKConfig()
        const refreshToken = getRefreshToken ? getRefreshToken() : undefined

        // expected business case, exit
        // @ts-ignore
        if (Object.values(LoginUrls).includes(url)) {
          throw error
        }

        // need to lock on the desktop as well to prevent multiple token request
        return refreshWithLock({ axiosConfig, clientId, refreshToken }).then(tokenResponse => {
          return uponRefreshComplete(error, tokenResponse, onSessionExpired, axiosConfig, config || {})
        })
      }
      return Promise.reject(error)
    }
  )
}

const uponRefreshComplete = (
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
