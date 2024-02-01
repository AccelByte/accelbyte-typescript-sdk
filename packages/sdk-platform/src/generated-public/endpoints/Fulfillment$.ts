/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { FulfillCodeRequest } from '../../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentResult } from '../../generated-definitions/FulfillmentResult.js'

export class Fulfillment$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Redeem campaign code, this api have rate limit, default: only allow request once per user in 2 seconds&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT&#34;, action=1 (CREATED)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
   */
  createFulfillmentCode_ByUserId(userId: string, data: FulfillCodeRequest): Promise<IResponse<FulfillmentResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/fulfillment/code'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, FulfillmentResult, 'FulfillmentResult')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
