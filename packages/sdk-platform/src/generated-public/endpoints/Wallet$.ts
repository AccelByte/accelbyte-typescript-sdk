/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { PlatformWallet } from '../../generated-definitions/PlatformWallet.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'

export class Wallet$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * get my wallet by currency code and namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt; &lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher user wallet&lt;/b&gt;&lt;/li&gt; &lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game user wallet&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUserMeWallet_ByCurrencyCode(currencyCode: string): Promise<Response<PlatformWallet>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/wallets/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformWallet, 'PlatformWallet')
  }
  /**
   * get a wallet by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: wallet info&lt;/li&gt;&lt;/ul&gt;
   */
  getWallet_ByUserId_ByCurrencyCode(userId: string, currencyCode: string): Promise<Response<PlatformWallet>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformWallet, 'PlatformWallet')
  }
  /**
   * List wallet transactions by currency code ordered by create time desc.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: currency transaction info&lt;/li&gt;&lt;/ul&gt;
   */
  getTransactions_ByUserId_ByCurrencyCode(
    userId: string,
    currencyCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<WalletTransactionPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/wallets/{currencyCode}/transactions'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      WalletTransactionPagingSlicedResult,
      'WalletTransactionPagingSlicedResult'
    )
  }
}
