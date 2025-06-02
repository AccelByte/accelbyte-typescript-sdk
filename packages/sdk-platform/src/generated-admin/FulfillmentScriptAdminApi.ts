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
import { FulfillmentScriptCreate } from '../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../generated-definitions/FulfillmentScriptUpdate.js'
import { FulfillmentScriptAdmin$ } from './endpoints/FulfillmentScriptAdmin$.js'

export function FulfillmentScriptAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getFulfillmentScripts(): Promise<AxiosResponse<FulfillmentScriptInfoArray>> {
    const $ = new FulfillmentScriptAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillmentScripts()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteFulfillmentScript_ById(id: string): Promise<AxiosResponse<unknown>> {
    const $ = new FulfillmentScriptAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteFulfillmentScript_ById(id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFulfillmentScript_ById(id: string): Promise<AxiosResponse<FulfillmentScriptInfo>> {
    const $ = new FulfillmentScriptAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillmentScript_ById(id)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchFulfillmentScript_ById(id: string, data: FulfillmentScriptUpdate): Promise<AxiosResponse<FulfillmentScriptInfo>> {
    const $ = new FulfillmentScriptAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchFulfillmentScript_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFulfillmentScript_ById(id: string, data: FulfillmentScriptCreate): Promise<AxiosResponse<FulfillmentScriptInfo>> {
    const $ = new FulfillmentScriptAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentScript_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;List all fulfillment scripts.
     */
    getFulfillmentScripts,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete fulfillment script.
     */
    deleteFulfillmentScript_ById,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get fulfillment script by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get fulfillment script&lt;/li&gt;&lt;/ul&gt;
     */
    getFulfillmentScript_ById,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update fulfillment script.
     */
    patchFulfillmentScript_ById,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Create fulfillment script.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;Fulfillment scripts are used for adding custom fulfillment logic based on &lt;b&gt;ITEM_TYPE&lt;/b&gt;: [MEDIA,INGAMEITEM] for now, and the custom scripts only cover grantDays.&lt;br&gt;Example for grantDays: &lt;br&gt;&lt;code&gt;order &amp;&amp; ((order.currency &amp;&amp; order.currency.currencyCode) == &#39;LP&#39; || order.isFree) ? 30 : -1&lt;/code&gt;&lt;br&gt;
     */
    createFulfillmentScript_ById
  }
}
