/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { FulfillCodeRequest } from '@accelbyte/sdk/generated-public/platform/definitions/FulfillCodeRequest'
import { Fulfillment$ } from '@accelbyte/sdk/generated-public/platform/Fulfillment$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class FulfillmentApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Redeem campaign code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:FULFILLMENT", action=1 (CREATED)</li><li><i>Returns</i>: fulfillment result</li></ul>
   */
  redeemCode = ({ userId, data }: { userId: string; data: FulfillCodeRequest }) => {
    return this.newInstance().postUsersByUseridFulfillmentCode(userId, data)
  }

  private newInstance() {
    return new Fulfillment$(Network.create(this.conf), this.namespace, this.cache)
  }
}
