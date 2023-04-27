/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosError, Method } from 'axios'

export interface ApiArgs {
  config?: SDKRequestConfig
  namespace?: string
  cache?: boolean
}

export interface SDKOptions {
  clientId: string
  redirectURI: string
  baseURL: string
  namespace: string

  // Optional args
  cache?: boolean
}

export interface SDKEvents {
  onSessionExpired?: () => void
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
  onUserEligibilityChange?: () => void
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
