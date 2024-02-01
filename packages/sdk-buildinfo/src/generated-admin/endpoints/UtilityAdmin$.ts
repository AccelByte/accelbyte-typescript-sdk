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
import { CleanerConfigObject } from '../../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../../generated-definitions/PingResultResponse.js'

export class UtilityAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to manually checks the readiness of differ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ping result&lt;/li&gt;&lt;/ul&gt;
   */
  getPingDiffer(): Promise<IResponseWithSync<PingResultResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/ping/differ'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PingResultResponse, 'PingResultResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get the BuildInfo configurations.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  getConfigurations(): Promise<IResponseWithSync<ConfigurationInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigurationInfo, 'ConfigurationInfo')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update the BuildInfo configurations.&lt;br/&gt;This API support update configuration based on given data. Single request can update single field or multi fields.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  patchConfiguration(data: ConfigurationUpdate): Promise<IResponse<ConfigurationInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigurationInfo, 'ConfigurationInfo')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to validate clientId and redirectUri from SDK Config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getValidateSdkConfig(queryParams: { clientId: string | null; redirectUri: string | null }): Promise<IResponseWithSync<ClientPayload>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/validateSDKConfig'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ClientPayload, 'ClientPayload')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to retrieve grace period of buildinfo cleaner.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Buildinfo Grace Period Time&lt;/li&gt;&lt;/ul&gt;
   */
  getCleanerConfigurations(): Promise<IResponseWithSync<CleanerConfigObject>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/cleanerConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, CleanerConfigObject, 'CleanerConfigObject')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
