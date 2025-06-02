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
import { NamespaceSlotConfigInfo } from '../generated-definitions/NamespaceSlotConfigInfo.js'
import { SlotConfigUpdate } from '../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../generated-definitions/UserSlotConfigInfo.js'
import { SlotConfigAdmin$ } from './endpoints/SlotConfigAdmin$.js'

export function SlotConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteConfig(): Promise<AxiosResponse<unknown>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfig(): Promise<AxiosResponse<NamespaceSlotConfigInfo>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfig(data: SlotConfigUpdate): Promise<AxiosResponse<NamespaceSlotConfigInfo>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfig_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfig_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfig_ByUserId(userId: string): Promise<AxiosResponse<UserSlotConfigInfo>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateConfig_ByUserId(userId: string, data: SlotConfigUpdate): Promise<AxiosResponse<UserSlotConfigInfo>> {
    const $ = new SlotConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a namespace slot configuration, the configuration will be default after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt;
     */
    deleteConfig,
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot configuration for a given namespace. In case slot configuration is not set, the default will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace slot config info&lt;/li&gt;&lt;/ul&gt;
     */
    getConfig,
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a slot namespace configuration.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated namespace slot config&lt;/li&gt;&lt;/ul&gt;
     */
    updateConfig,
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes a user slot configuration in given namespace, the namespace slot configuration will be returned after delete.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/li&gt;
     */
    deleteConfig_ByUserId,
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get a user slot configuration in given namespace. In case the user slot configuration is not set, the namespace configuration will be returned.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;Returns&lt;/i&gt;: slot config info&lt;/li&gt;
     */
    getConfig_ByUserId,
    /**
     * @deprecated
     * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Update a user slot configuration in given namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot config&lt;/li&gt;
     */
    updateConfig_ByUserId
  }
}
