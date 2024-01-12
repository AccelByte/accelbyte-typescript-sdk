/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { GlobalConfiguration } from '../../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../../generated-definitions/PutGlobalConfigurationRequest.js'

export class AdminAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Delete of global configuration data.
   */
  deleteGlobalConfiguration(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get dsmc global configuration.
   */
  getGlobalConfigurations(): Promise<IResponseWithSync<GlobalConfiguration>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GlobalConfiguration, 'GlobalConfiguration')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Upsert global configuration data.
   */
  updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<IResponse<GlobalConfiguration>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/global-configurations'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, GlobalConfiguration, 'GlobalConfiguration')
  }
}
