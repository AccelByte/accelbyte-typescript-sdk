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
import { PlatformWallet } from '../generated-definitions/PlatformWallet.js'
import { WalletTransactionPagingSlicedResult } from '../generated-definitions/WalletTransactionPagingSlicedResult.js'
import { Wallet$ } from './endpoints/Wallet$.js'

export function WalletApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<AxiosResponse<PlatformWallet>> {
    const $ = new Wallet$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUserMeWallet_ByCurrencyCode(currencyCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<AxiosResponse<PlatformWallet>> {
    const $ = new Wallet$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getTransactions_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<WalletTransactionPagingSlicedResult>> {
    const $ = new Wallet$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTransactions_ByUserId_ByCurrencyCode(userId, currencyCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * get my wallet by currency code and namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt; &lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user wallet&lt;/b&gt;&lt;/li&gt; &lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user wallet&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getUserMeWallet_ByCurrencyCode,
    /**
     * get a wallet by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
     */
    getWallet_ByUserId_ByCurrencyCode,
    /**
     * List wallet transactions by currency code ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
     */
    getTransactions_ByUserId_ByCurrencyCode
  }
}
