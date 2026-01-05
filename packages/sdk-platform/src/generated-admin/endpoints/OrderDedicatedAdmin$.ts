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
import { OrderSyncResult } from '../../generated-definitions/OrderSyncResult.js'

export class OrderDedicatedAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Sync orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync orders&lt;/li&gt;&lt;/ul&gt;
   */
  getOrders(queryParams: {
    end: string | null
    start: string | null
    nextEvaluatedKey?: string | null
  }): Promise<Response<OrderSyncResult>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/orders'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OrderSyncResult, 'OrderSyncResult')
  }
}
