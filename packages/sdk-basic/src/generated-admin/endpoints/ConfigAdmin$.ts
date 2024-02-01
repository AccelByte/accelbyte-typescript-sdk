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
import { ConfigCreate } from '../../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../../generated-definitions/ConfigUpdate.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Create a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:BASIC:CONFIG&#34;&lt;/b&gt;, action=1 &lt;b&gt;(CREATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  createConfig(data: ConfigCreate): Promise<IResponse<ConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigInfo, 'ConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:BASIC:CONFIG&#34;&lt;/b&gt;, action=8 &lt;b&gt;(DELETE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  deleteConfig_ByConfigKey(configKey: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:BASIC:CONFIG&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig_ByConfigKey(configKey: string): Promise<IResponseWithSync<ConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigInfo, 'ConfigInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:BASIC:CONFIG&#34;&lt;/b&gt;, action=4 &lt;b&gt;(UPDATE)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt;
   */
  patchConfig_ByConfigKey(configKey: string, data: ConfigUpdate): Promise<IResponse<ConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigInfo, 'ConfigInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a publisher config.&lt;br&gt;It will return a publisher namespace config of the given namespace and key.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&lt;b&gt;&#34;ADMIN:NAMESPACE:{namespace}:BASIC:CONFIG&#34;&lt;/b&gt;, action=2 &lt;b&gt;(READ)&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt;
   */
  getPublisherConfig_ByConfigKey(configKey: string): Promise<IResponseWithSync<ConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/admin/namespaces/{namespace}/publisher/configs/{configKey}'
      .replace('{namespace}', this.namespace)
      .replace('{configKey}', configKey)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigInfo, 'ConfigInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
