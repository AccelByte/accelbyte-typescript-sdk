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
import { CurrencyConfig } from '../../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../../generated-definitions/CurrencyUpdate.js'

export class CurrencyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<Response<CurrencyInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyInfoArray, 'CurrencyInfoArray')
  }
  /**
   * Create a currency.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created currency&lt;/li&gt;&lt;/ul&gt;
   */
  createCurrency(data: CurrencyCreate): Promise<Response<CurrencyInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyInfo, 'CurrencyInfo')
  }
  /**
   * Delete a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt;
   */
  deleteCurrency_ByCurrencyCode(currencyCode: string): Promise<Response<CurrencyInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyInfo, 'CurrencyInfo')
  }
  /**
   * Update a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated currency&lt;/li&gt;&lt;/ul&gt;
   */
  updateCurrency_ByCurrencyCode(currencyCode: string, data: CurrencyUpdate): Promise<Response<CurrencyInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyInfo, 'CurrencyInfo')
  }
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get currency config by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  getConfig_ByCurrencyCode(currencyCode: string): Promise<Response<CurrencyConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}/config'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyConfig, 'CurrencyConfig')
  }
  /**
   * Get currency summary by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt;
   */
  getSummary_ByCurrencyCode(currencyCode: string): Promise<Response<CurrencySummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/currencies/{currencyCode}/summary'
      .replace('{namespace}', this.namespace)
      .replace('{currencyCode}', currencyCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencySummary, 'CurrencySummary')
  }
}
