/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigsWithPagination } from '../../generated-definitions/ConfigsWithPagination.js'
import { CreateConfig } from '../../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../../generated-definitions/UpdateConfig.js'

export class CommonConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all configs in the namespace
   */
  getConfigs(queryParams?: { limit?: string | null; offset?: string | null }): Promise<Response<ConfigsWithPagination>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigsWithPagination, 'ConfigsWithPagination')
  }
  /**
   * Create a config in the namespace with the given key
   */
  createConfig(data: CreateConfig): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Get a config by namespace and key
   */
  getConfig_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Delete a config by namespace and key.
   */
  deleteConfig_ByConfigKey(configKey: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update a config by namespace and key
   */
  patchConfig_ByConfigKey(configKey: string, data: UpdateConfig): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * @deprecated
   * It will return a publisher namespace config of the given namespace and key.
   */
  getPublisherConfig_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/publisher/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
}
