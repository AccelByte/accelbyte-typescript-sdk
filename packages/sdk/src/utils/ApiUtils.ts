/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import axios, { AxiosRequestConfig } from 'axios'

export class ApiUtils {
  static mergeAxiosConfigs = (config: AxiosRequestConfig, overrides?: AxiosRequestConfig): AxiosRequestConfig => {
    return {
      ...config,
      ...overrides,
      headers: {
        ...config?.headers,
        ...overrides?.headers
      }
    }
  }

  static is4xxError = (error: unknown): boolean => {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.status >= 400 && error.response.status <= 499
    }
    return false
  }
}
