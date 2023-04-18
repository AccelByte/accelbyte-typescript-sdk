/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ApiArgs, SDKRequestConfig } from '../Types'

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
}
