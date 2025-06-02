/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CleanerConfigObject } from '../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../generated-definitions/PingResultResponse.js'
import { UtilityAdmin$ } from './endpoints/UtilityAdmin$.js'

export function UtilityAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getPingDiffer(): Promise<AxiosResponse<PingResultResponse>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPingDiffer()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigurations(): Promise<AxiosResponse<ConfigurationInfo>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfiguration(data: ConfigurationUpdate): Promise<AxiosResponse<ConfigurationInfo>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getValidateSdkConfig(queryParams: {
    clientId: string | null
    redirectUri: string | null
  }): Promise<AxiosResponse<ClientPayload>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getValidateSdkConfig(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getCleanerConfigurations(): Promise<AxiosResponse<CleanerConfigObject>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCleanerConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to manually checks the readiness of differ.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: ping result&lt;/li&gt;&lt;/ul&gt;
     */
    getPingDiffer,
    /**
     * This API is used to get the BuildInfo configurations.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
     */
    getConfigurations,
    /**
     * This API is used to update the BuildInfo configurations.&lt;br/&gt;This API support update configuration based on given data. Single request can update single field or multi fields.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Entitlement Validation&lt;/b&gt;&lt;br/&gt;Entitlement Validation is utilized in download and update game/application flow.&lt;br/&gt;It will check whether the user is entitled for the game/application or not through Justice Entitlement Service.&lt;br/&gt;If user is entitled, it will process the request, otherwise the request will rejected.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Configuration Info&lt;/li&gt;&lt;/ul&gt;
     */
    patchConfiguration,
    /**
     * This API is used to validate clientId and redirectUri from SDK Config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Basic Build Manifest&lt;/li&gt;&lt;/ul&gt;
     */
    getValidateSdkConfig,
    /**
     * This API is used to retrieve grace period of buildinfo cleaner.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Buildinfo Grace Period Time&lt;/li&gt;&lt;/ul&gt;
     */
    getCleanerConfigurations
  }
}
