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
import { GlobalConfiguration } from '../../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export class AdminAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Delete of global configuration data.
   */
  deleteGlobalConfiguration(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Get dsmc global configuration.
   */
  getGlobalConfigurations(): Promise<Response<GlobalConfiguration>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GlobalConfiguration, 'GlobalConfiguration')
  }
  /**
   * @deprecated
   * Upsert global configuration data.
   */
  updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<Response<GlobalConfiguration>> {
    const params = {} as AxiosRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GlobalConfiguration, 'GlobalConfiguration')
  }
}
