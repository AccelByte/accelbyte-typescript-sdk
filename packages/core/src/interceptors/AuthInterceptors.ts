/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKOptions } from '@od-web-sdk/AccelbyteSDK'
import { TokenResponseV3 } from '@od-web-sdk/generated-public/iam/definitions/TokenResponseV3'
import { OAuth20$ } from '@od-web-sdk/generated-public/iam/OAuth20$'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { injectRequestInterceptors, injectResponseInterceptors, Network } from '../utils/Network'
import { RefreshSession } from '../utils/RefreshSession'

const REFRESH_EXPIRY = 1000
const REFRESH_EXPIRY_UPDATE_RATE = 500
const REFRESH_EXPIRY_CHECK_RATE = 1000

enum LoginUrls {
  REFRESH_SESSION = '/iam/v3/oauth/token',
  LOGOUT = '/iam/v3/logout',
  REVOKE = '/iam/v3/oauth/revoke'
}

type RefreshArgs = {
  axiosConfig: AxiosRequestConfig
  refreshToken?: string
  clientId: string
  isDesktopApp?: boolean
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
  }

  const oauth20 = new OAuth20$(axios, 'NAMESPACE-NOT-REQUIRED', false)
  return oauth20.postIamV3OauthToken(payload)
}

// Return Promise<true> if refresh in any tab is successful;
export const refreshWithLock = ({
  axiosConfig,
  refreshToken,
  clientId,
  isDesktopApp
}: RefreshArgs): Promise<Partial<TokenResponseV3> | false> => {
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
    .then(doRefreshSession({ axiosConfig, clientId, refreshToken, isDesktopApp }))
    .finally(() => {
      isLocallyRefreshingToken = false
      RefreshSession.unlock()
    })
}

export const doRefreshSession =
  ({ axiosConfig, clientId, refreshToken, isDesktopApp }: RefreshArgs) =>
  async () => {
    // we need this to check if app use “withCredentials: false” and don’t have refreshToken it should return false,
    // because we track it as a logout user, if not do this even user logout on the desktop app (that use withCredentials: false)
    // will automatically login with refreshSession
    if (isDesktopApp && !axiosConfig.withCredentials && !refreshToken) {
      return false
    }
    const result = await refreshSession({ axiosConfig: axiosConfig, clientId, refreshToken })
    if (result.error) {
      return false
    }
    return result.response.data
  }

interface initOnUnAuthorizedHandlerArgs {
  getSDKOption: () => SDKOptions
  getSDKConfig: () => AxiosRequestConfig
  onSessionExpired?: () => void
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
}

const initOnUnAuthorizedHandlerImpl = ({
  getSDKConfig,
  getSDKOption,
  onSessionExpired,
  onGetUserSession
}: initOnUnAuthorizedHandlerArgs) => {
  // ===== request
  injectRequestInterceptors(
    async config => {
      // need to lock on the desktop as well to sleep other request before refresh session is done
      const isRefreshTokenUrl = config.url === LoginUrls.REFRESH_SESSION
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
      return response
    },
    async (error: AxiosError) => {
      if (axios.isCancel(error)) {
        // expected case, exit
        throw error
      } else {
        const { config, response } = error
        if (!response) {
          console.error('injectResponseInterceptors net::ERR_INTERNET_DISCONNECTED')
        }

        if (response?.status === 401) {
          const { url } = config
          const { clientId, isDesktopApp, refreshToken } = getSDKOption()
          const axiosConfig = getSDKConfig()

          // expected business case, exit
          // @ts-ignore
          if (Object.values(LoginUrls).includes(url)) {
            throw error
          }

          // need to lock on the desktop as well to prevent multiple token request
          return refreshWithLock({ axiosConfig, clientId, refreshToken, isDesktopApp }).then(tokenResponse => {
            return uponRefreshComplete(error, tokenResponse, onGetUserSession, onSessionExpired, axiosConfig, config)
          })
        }
      }

      return Promise.reject(error)
    }
  )
}

const uponRefreshComplete = (
  error: AxiosError,
  tokenResponse: Partial<TokenResponseV3> | false,
  onGetUserSession: ((accessToken: string, refreshToken: string) => void) | undefined,
  onSessionExpired: (() => void) | undefined,
  axiosConfig: AxiosRequestConfig,
  errorConfig: AxiosRequestConfig
) => {
  //
  if (tokenResponse) {
    const { access_token, refresh_token } = tokenResponse
    if (onGetUserSession && access_token && refresh_token) {
      onGetUserSession(access_token, refresh_token)
    }

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
    console.log('session expired auth')
    onSessionExpired()
  }
  throw error
}

export const injectAuthInterceptors = initOnUnAuthorizedHandlerImpl
