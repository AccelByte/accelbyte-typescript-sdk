/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { GlobalConfigurationResponse } from '../../generated-definitions/GlobalConfigurationResponse.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export class GlobalConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Delete of global configuration data.
   */
  deleteGlobalConfiguration(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Record of global configuration data.
   */
  getGlobalConfigurations(): Promise<Response<GlobalConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
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
  updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<Response<GlobalConfigurationResponse>> {
    const params = {} as AxiosRequestConfig
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
