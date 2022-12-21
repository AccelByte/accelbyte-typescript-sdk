/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementByAppId({ userId, appId }: { userId: string; appId: string }) {
    return this.newInstance().fetchUsersByUseridEntitlementsByAppId(userId, {
      appId
    })
  }

  /**
   * Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>
   */
  getEntitlements({ userId, queryParams }: { userId: string; queryParams: Parameters<Entitlement$['fetchUsersByUseridEntitlements']>[1] }) {
    return this.newInstance().fetchUsersByUseridEntitlements(userId, queryParams)
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementOwnerShip({
    userId,
    queryParams
  }: {
    userId: string
    queryParams: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  }) {
    return this.newInstance().fetchUsersByUseridEntitlementsOwnershipAny(userId, queryParams)
  }

  /**
   * Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  getEntitlementByItemIds({ userId, queryParams }: { userId: string; queryParams?: { ids?: string[] } }) {
    return this.newInstance().fetchUsersByUseridEntitlementsOwnershipByItemIds(userId, queryParams)
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>
   */
  claimEntitlement({ userId, entitlementId, data }: { userId: string; entitlementId: string; data: EntitlementDecrement }) {
    return this.newInstance().putUsersByUseridEntitlementsByEntitlementidDecrement(userId, entitlementId, data)
  }

  private newInstance() {
    return new Entitlement$(Network.create(this.conf), this.namespace, this.cache)
  }
}
