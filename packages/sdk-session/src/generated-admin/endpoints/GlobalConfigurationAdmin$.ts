/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { GlobalConfigurationResponse } from '../../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export class GlobalConfigurationAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Delete of global configuration data.
   */
  deleteGlobalConfiguration(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Record of global configuration data.
   */
  getGlobalConfigurations(): Promise<IResponse<GlobalConfigurationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GlobalConfigurationResponse,
      'GlobalConfigurationResponse'
    )
  }

  /**
   * Upsert global configuration data.
   */
  updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<IResponse<GlobalConfigurationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GlobalConfigurationResponse,
      'GlobalConfigurationResponse'
    )
  }
}
