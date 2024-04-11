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
import { GlobalConfiguration } from '../../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export class AdminAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Delete of global configuration data.
   */
  deleteGlobalConfiguration(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get dsmc global configuration.
   */
  getGlobalConfigurations(): Promise<IResponse<GlobalConfiguration>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GlobalConfiguration, 'GlobalConfiguration')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Upsert global configuration data.
   */
  updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<IResponse<GlobalConfiguration>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GlobalConfiguration, 'GlobalConfiguration')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
