/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { IResponse, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
/* eslint-disable camelcase */
import { FulfillCodeRequest } from './definitions/FulfillCodeRequest'
import { FulfillmentResult } from './definitions/FulfillmentResult'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Fulfillment$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postUsersByUseridFulfillmentCode<T = FulfillmentResult>(userId: string, data: FulfillCodeRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/public/namespaces/' + this.namespace + '/users/' + userId + '/fulfillment/code'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, FulfillmentResult)
  }
}
