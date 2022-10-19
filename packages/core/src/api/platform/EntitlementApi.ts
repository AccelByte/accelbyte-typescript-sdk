/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { EntitlementDecrement } from '@od-web-sdk/generated-public/platform/definitions/EntitlementDecrement'
import { Entitlement$ } from '@od-web-sdk/generated-public/platform/Entitlement$'
import { Network } from '@od-web-sdk/utils/Network'

export class EntitlementApi {
  // need to get updated response on EntitlementApi, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new Entitlement$(Network.create(this.conf), this.namespace, this.cache)
  }

  getEntitlementByAppId({ userId, appId }: { userId: string; appId: string }) {
    return this.newInstance().fetchUsersByUseridEntitlementsByAppId(userId, {
      appId
    })
  }

  getEntitlements({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: {
      entitlementClazz?: string | null
      appType?: string | null
      entitlementName?: string | null
      itemId?: string[]
      offset?: number
      limit?: number
    }
  }) {
    return this.newInstance().fetchUsersByUseridEntitlements(userId, queryParams)
  }

  getEntitlementOwnerShip({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  }) {
    return this.newInstance().fetchUsersByUseridEntitlementsOwnershipAny(userId, queryParams)
  }

  getEntitlementByItemIds({ userId, queryParams }: { userId: string; queryParams?: { ids?: string[] } }) {
    return this.newInstance().fetchUsersByUseridEntitlementsOwnershipByItemIds(userId, queryParams)
  }

  claimEntitlement({ userId, entitlementId, data }: { userId: string; entitlementId: string; data: EntitlementDecrement }) {
    return this.newInstance().putUsersByUseridEntitlementsByEntitlementidDecrement(userId, entitlementId, data)
  }
}
