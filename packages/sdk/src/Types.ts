/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosError, Method } from 'axios'
import { RequestInterceptor, ResponseInterceptor, ErrorInterceptor } from './utils/Network'

/**
 * This interface is used to override the values set when Accelbyte.SDK was initialized.
 * For example, you can override the headers in a certain API call by passing `config.headers`:
 *
 * ```ts
 * Platform.ItemApi(sdk, {
 *   config: {
 *     headers: {
 *       Authorization: "Bearer ..."
 *     }
 *   }
 * }).getLocale_ByItemId(itemId)
 * ```
 */
export interface ApiArgs {
  config?: SDKRequestConfig
  namespace?: string
  cache?: boolean
}

export interface CustomInterceptors {
  request: RequestInterceptor
  response: ResponseInterceptor
  error: ErrorInterceptor
}

export interface SDKOptions {
  /**
   * The client ID for the SDK. This value is retrieved from Admin Portal, OAuth Clients.
   */
  clientId: string
  /**
   * The redirect URI after logging in. This is used to generate the valid login URL to IAM.
   * This value is retrieved from Admin Portal, OAuth Clients.
   */
  redirectURI: string
  /**
   * The base URL of your AGS deployment.
   */
  baseURL: string
  /**
   * The namespace of your AGS deployment.
   */
  namespace: string

  /**
   * Custom interceptors for axios. If not provided, by default the SDK will send a POST request
   * to `/iam/v3/oauth/token` whenever there is a `401 Unauthenticated` response status.
   */
  customInterceptors?: CustomInterceptors

  /**
   * [Experimental] Whether to cache the responses or not using the mechanism inside the SDK.
   */
  cache?: boolean

  /**
   * Use when in internal Accelbyte network. Must be used in server only environment.
   * When value is true, it will call `http://{service-name}/{path}` instead of `baseURL`
   */
  useInternalNetwork?: boolean
}

export interface SDKEvents {
  /**
   * The callback fired when the session expires.
   */
  onSessionExpired?: () => void
  /**
   * The callback fired when user session is retrieved, which can be from
   * logging in, or refreshing access token.
   */
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
  /**
   * The callback fired when there are legal changes, usually related to user age.
   * [Docs reference](https://docs.accelbyte.io/gaming-services/knowledge-base/api-endpoints-error-codes/#10130---user-under-age).
   */
  onUserEligibilityChange?: () => void
  /**
   * The callback fired whenever there is a non-specific response error.
   */
  onError?: (error: AxiosError) => void
}

// This is high level strict types taken from the AxiosRequestConfig implementation
export interface SDKRequestConfig<D = any> {
  // AxiosRequestConfig
  url?: string
  method?: Method | string
  baseURL?: string
  headers?: Record<string, string | number | boolean>
  params?: any
  paramsSerializer?: (params: any) => string
  data?: D
  timeout?: number
  timeoutErrorMessage?: string
  signal?: AbortSignal
  // `withCredentials` indicates whether or not cross-site Access-Control requests should be made using credentials
  // withCredentials:true will automatically send the cookie to the client-side
  withCredentials?: boolean // default true
}
