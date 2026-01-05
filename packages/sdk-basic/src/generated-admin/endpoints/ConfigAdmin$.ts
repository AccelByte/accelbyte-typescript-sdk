/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ConfigCreate } from '../../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../../generated-definitions/ConfigUpdate.js'

export class ConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Create a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  createConfig(data: ConfigCreate): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Delete a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  deleteConfig_ByConfigKey(configKey: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Update a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  patchConfig_ByConfigKey(configKey: string, data: ConfigUpdate): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
  /**
   * Get a publisher config.&lt;br&gt;It will return a publisher namespace config of the given namespace and key.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisherConfig_ByConfigKey(configKey: string): Promise<Response<ConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/publisher/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigInfo, 'ConfigInfo')
  }
}
