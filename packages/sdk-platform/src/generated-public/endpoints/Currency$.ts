/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { CurrencyInfoArray } from '../../generated-definitions/CurrencyInfoArray.js'

export class Currency$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt;
   */
  getCurrencies(queryParams?: { currencyType?: 'REAL' | 'VIRTUAL' }): Promise<Response<CurrencyInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/currencies'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CurrencyInfoArray, 'CurrencyInfoArray')
  }
}
