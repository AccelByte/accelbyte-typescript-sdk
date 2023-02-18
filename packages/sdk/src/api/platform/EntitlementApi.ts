/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { EntitlementDecrement } from '@accelbyte/sdk/generated-public/platform/definitions/EntitlementDecrement'
import { Entitlement$ } from '@accelbyte/sdk/generated-public/platform/Entitlement$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class EntitlementApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Get user app entitlement by appId.
   */
  getEntitlementByAppId({ userId, appId }: { userId: string; appId: string }) {
    return this.newInstance().fetchNsUsersByUseridEntitlementsByAppId(userId, {
      appId
    })
  }

  /**
   * Query user entitlements for a specific user.
   * Returns: entitlement list
   */
  getEntitlements({
    userId,
    queryParams
  }: {
    userId: string
    queryParams: Parameters<Entitlement$['fetchNsUsersByUseridEntitlements']>[1]
  }) {
    return this.newInstance().fetchNsUsersByUseridEntitlements(userId, queryParams)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds
   */
  getEntitlementOwnerShip({
    userId,
    queryParams
  }: {
    userId: string
    queryParams: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  }) {
    return this.newInstance().fetchNsUsersByUseridEntitlementsOwnershipAny(userId, queryParams)
  }

  /**
   * Get user entitlement ownership by itemIds.
   */
  getEntitlementByItemIds({ userId, queryParams }: { userId: string; queryParams?: { ids?: string[] } }) {
    return this.newInstance().fetchNsUsersByUseridEntitlementsOwnershipByItemIds(userId, queryParams)
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX
   * Returns: consumed entitlement
   */
  claimEntitlement({ userId, entitlementId, data }: { userId: string; entitlementId: string; data: EntitlementDecrement }) {
    return this.newInstance().putNsUsersByUseridEntitlementsByEntitlementidDecrement(userId, entitlementId, data)
  }

  private newInstance() {
    return new Entitlement$(Network.create(this.conf), this.namespace, this.cache)
  }
}
