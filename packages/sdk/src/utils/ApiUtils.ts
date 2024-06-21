/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ApiArgs, SDKRequestConfig } from '../Types'
import axios from 'axios'

export class ApiUtils {
  static mergedConfigs = (config: SDKRequestConfig, overrides?: ApiArgs): SDKRequestConfig => {
    return {
      ...config,
      ...overrides?.config,
      headers: {
        ...config.headers,
        ...overrides?.config?.headers
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
