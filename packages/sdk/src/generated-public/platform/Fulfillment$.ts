/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { FulfillCodeRequest } from './definitions/FulfillCodeRequest'
import { FulfillmentResult } from './definitions/FulfillmentResult'

export class Fulfillment$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Redeem campaign code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT", action=1 (CREATED)</li><li><i>Returns</i>: fulfillment result</li></ul>
   */
  createFulfillmentCode_ByUserId<T = FulfillmentResult>(userId: string, data: FulfillCodeRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/fulfillment/code'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, FulfillmentResult)
  }
}
