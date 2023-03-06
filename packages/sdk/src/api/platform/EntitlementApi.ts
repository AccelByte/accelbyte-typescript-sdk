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
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppId](api)
   *
   * Get user app entitlement by appId.
   */
  getEntitlementByAppId = ({ userId, appId }: { userId: string; appId: string }) => {
    return this.newInstance().fetchEntitlementsByAppId_ByUserId(userId, {
      appId
    })
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/entitlements](api)
   *
   * Query user entitlements for a specific user.
   * Returns: entitlement list
   */
  getEntitlements = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams: Parameters<Entitlement$['fetchEntitlements_ByUserId']>[1]
  }) => {
    return this.newInstance().fetchEntitlements_ByUserId(userId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/any](api)
   *
   * Exists any user active entitlement of specified itemIds, skus and appIds
   */
  getEntitlementOwnerShip = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  }) => {
    return this.newInstance().fetchEntitlementsOwnershipAny_ByUserId(userId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemIds](api)
   *
   * Get user entitlement ownership by itemIds.
   */
  getEntitlementByItemIds = ({ userId, queryParams }: { userId: string; queryParams?: { ids?: string[] } }) => {
    return this.newInstance().fetchEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
  }

  /**
   * PUT [/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/decrement](api)
   *
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX
   * Returns: consumed entitlement
   */
  claimEntitlement = ({ userId, entitlementId, data }: { userId: string; entitlementId: string; data: EntitlementDecrement }) => {
    return this.newInstance().updateDecrement_ByUserId_ByEntitlementId(userId, entitlementId, data)
  }

  private newInstance() {
    return new Entitlement$(Network.create(this.conf), this.namespace, this.cache)
  }
}
