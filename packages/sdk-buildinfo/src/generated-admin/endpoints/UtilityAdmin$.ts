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
import { CleanerConfigObject } from '../../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../../generated-definitions/PingResultResponse.js'

export class UtilityAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This API is used to manually checks the readiness of differ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ping result&lt;/li&gt;&lt;/ul&gt;
   */
  getPingDiffer(): Promise<IResponse<PingResultResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/ping/differ'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PingResultResponse, 'PingResultResponse')
  }

  /**
   * This API is used to get the BuildInfo configurations.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  getConfigurations(): Promise<IResponse<ConfigurationInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigurationInfo, 'ConfigurationInfo')
  }

  /**
   * This API is used to update the BuildInfo configurations.&lt;br/&gt;This API support update configuration based on given data. Single request can update single field or multi fields.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
   */
  patchConfiguration(data: ConfigurationUpdate): Promise<IResponse<ConfigurationInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ConfigurationInfo, 'ConfigurationInfo')
  }

  /**
   * This API is used to validate clientId and redirectUri from SDK Config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
   */
  getValidateSdkConfig(queryParams: { clientId: string | null; redirectUri: string | null }): Promise<IResponse<ClientPayload>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/validateSDKConfig'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ClientPayload, 'ClientPayload')
  }

  /**
   * This API is used to retrieve grace period of buildinfo cleaner.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Buildinfo Grace Period Time&lt;/li&gt;&lt;/ul&gt;
   */
  getCleanerConfigurations(): Promise<IResponse<CleanerConfigObject>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/cleanerConfigurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CleanerConfigObject, 'CleanerConfigObject')
  }
}
