/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { FulfillCodeRequest } from '@od-web-sdk/generated-public/platform/definitions/FulfillCodeRequest'
import { Fulfillment$ } from '@od-web-sdk/generated-public/platform/Fulfillment$'
import { Network } from '@od-web-sdk/utils/Network'

export class FulfillmentApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Fulfillment$(Network.create(this.conf), this.namespace, this.cache)
  }

  redeemCode = ({ userId, data }: { userId: string; data: FulfillCodeRequest }) => {
    return this.newInstance().postUsersByUseridFulfillmentCode(userId, data)
  }
}
