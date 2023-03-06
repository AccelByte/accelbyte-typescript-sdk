/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * POST [/platform/public/namespaces/{namespace}/users/{userId}/fulfillment/code](api)
   *
   * Redeem campaign code
   *
   * Returns: fulfillment result
   */
  redeemCode = ({ userId, data }: { userId: string; data: FulfillCodeRequest }) => {
    return this.newInstance().createFulfillmentCode_ByUserId(userId, data)
  }

  private newInstance() {
    return new Fulfillment$(Network.create(this.conf), this.namespace, this.cache)
  }
}
