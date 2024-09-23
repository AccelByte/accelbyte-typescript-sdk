/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PaymentAccountArray } from '../generated-definitions/PaymentAccountArray.js'
import { PaymentAccount$ } from './endpoints/PaymentAccount$.js'

export function PaymentAccountApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPaymentAccounts_ByUserId(userId: string): Promise<AxiosResponse<PaymentAccountArray>> {
    const $ = new PaymentAccount$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentAccounts_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePaymentAccount_ByUserId_ByType_ById(userId: string, type: string, id: string): Promise<AxiosResponse<unknown>> {
    const $ = new PaymentAccount$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePaymentAccount_ByUserId_ByType_ById(userId, type, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt;
     */
    getPaymentAccounts_ByUserId,
    /**
     * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt;
     */
    deletePaymentAccount_ByUserId_ByType_ById
  }
}
