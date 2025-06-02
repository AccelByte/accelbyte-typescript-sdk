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
import { PaymentCallbackConfigInfo } from '../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../generated-definitions/PaymentCallbackConfigUpdate.js'
import { PaymentCallbackConfigAdmin$ } from './endpoints/PaymentCallbackConfigAdmin$.js'

export function PaymentCallbackConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPaymentConfigCallback(): Promise<AxiosResponse<PaymentCallbackConfigInfo>> {
    const $ = new PaymentCallbackConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentConfigCallback()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePaymentConfigCallback(data: PaymentCallbackConfigUpdate): Promise<AxiosResponse<PaymentCallbackConfigInfo>> {
    const $ = new PaymentCallbackConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePaymentConfigCallback(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * &lt;h3&gt;The endpoint is going to be deprecated &lt;/h3&gt;&lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentConfigCallback,
    /**
     * @deprecated
     * &lt;h3&gt;The endpoint is going to be deprecated &lt;/h3&gt;&lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt;
     */
    updatePaymentConfigCallback
  }
}
