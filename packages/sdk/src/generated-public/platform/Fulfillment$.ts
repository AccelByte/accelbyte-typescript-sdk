/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { IResponse, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { FulfillCodeRequest } from './definitions/FulfillCodeRequest'
import { FulfillmentResult } from './definitions/FulfillmentResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Fulfillment$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Redeem campaign code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT", action=1 (CREATED)</li><li><i>Returns</i>: fulfillment result</li></ul>
   */
  postUsersByUseridFulfillmentCode<T = FulfillmentResult>(userId: string, data: FulfillCodeRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/fulfillment/code'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, FulfillmentResult)
  }
}
