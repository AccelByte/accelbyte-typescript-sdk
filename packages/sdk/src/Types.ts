/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { MakeOptional } from './utils/Type'

export const CoreConfig = z.object({
  /**
   * The client ID for the SDK. This value is retrieved from Admin Portal, OAuth Clients.
   */
  clientId: z.string().min(1),
  /**
   * The redirect URI after logging in. This is used to generate the valid login URL to IAM.
   * This value is retrieved from Admin Portal, OAuth Clients.
   */
  redirectURI: z.string().url(),
  /**
   * The base URL of your AGS deployment.
   */
  baseURL: z.string().url(),
  /**
   * The namespace of your AGS deployment.
   */
  namespace: z.string().min(1),
  /**
   * When "false" is provided, the SDK bypasses Zod Schema Validation.
   * Default is "true".
   */
  useSchemaValidation: z.boolean().default(true)
})

export type CoreConfig = z.infer<typeof CoreConfig>

export interface AxiosConfig {
  interceptors?: Interceptor[]
  request?: AxiosRequestConfig
}

export interface WebSocketConfig {
  /**
   * Allow reconnect when upstream is abruptly disconnected.
   * @default true
   */
  allowReconnect?: boolean
  /**
   * Maximum number of reconnect attempts. Positive value integer.
   * Set 0 for unlimited attempts.
   * @default 0
   */
  maxReconnectAttempts?: number
}

export type Interceptor =
  | {
      type: 'request'
      name: string
      onRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
      onError?: (error: unknown) => unknown
    }
  | {
      type: 'response'
      name: string
      onSuccess?: (response: AxiosResponse<unknown>) => AxiosResponse<unknown>
      onError?: (error: unknown) => unknown
    }

export interface SdkConstructorParam {
  coreConfig: MakeOptional<CoreConfig, 'useSchemaValidation'>
  axiosConfig?: AxiosConfig
  webSocketConfig?: WebSocketConfig
}

export interface SdkSetConfigParam {
  coreConfig?: Partial<CoreConfig>
  axiosConfig?: AxiosConfig
  webSocketConfig?: WebSocketConfig
}

export type ApiError = {
  errorCode: number | string
  errorMessage: string
}
export type TokenConfig = { accessToken?: string; refreshToken?: string | null }
