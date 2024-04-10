/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdminEntitlementDecrement } from '../generated-definitions/AdminEntitlementDecrement.js'
import { AdminEntitlementSoldRequest } from '../generated-definitions/AdminEntitlementSoldRequest.js'
import { AppEntitlementInfo } from '../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { BulkEntitlementGrantRequest } from '../generated-definitions/BulkEntitlementGrantRequest.js'
import { BulkEntitlementGrantResult } from '../generated-definitions/BulkEntitlementGrantResult.js'
import { BulkEntitlementRevokeResult } from '../generated-definitions/BulkEntitlementRevokeResult.js'
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { EntitlementAdmin$ } from './endpoints/EntitlementAdmin$.js'
import { EntitlementConfigInfo } from '../generated-definitions/EntitlementConfigInfo.js'
import { EntitlementDecrementResult } from '../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementGrant } from '../generated-definitions/EntitlementGrant.js'
import { EntitlementHistoryInfoArray } from '../generated-definitions/EntitlementHistoryInfoArray.js'
import { EntitlementIfc } from '../generated-definitions/EntitlementIfc.js'
import { EntitlementInfo } from '../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementPlatformConfigInfo } from '../generated-definitions/EntitlementPlatformConfigInfo.js'
import { EntitlementPlatformConfigUpdate } from '../generated-definitions/EntitlementPlatformConfigUpdate.js'
import { EntitlementPrechekResult } from '../generated-definitions/EntitlementPrechekResult.js'
import { EntitlementSoldResult } from '../generated-definitions/EntitlementSoldResult.js'
import { EntitlementUpdate } from '../generated-definitions/EntitlementUpdate.js'
import { Ownership } from '../generated-definitions/Ownership.js'
import { RevokeUseCountRequest } from '../generated-definitions/RevokeUseCountRequest.js'
import { StackableEntitlementInfoArray } from '../generated-definitions/StackableEntitlementInfoArray.js'
import { TimedOwnership } from '../generated-definitions/TimedOwnership.js'

export function EntitlementAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Query entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlements(queryParams?: {
    activeOnly?: boolean | null
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    entitlementName?: string | null
    itemId?: string[]
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<EntitlementPagingSlicedResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlements(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Grant entitlements to multiple users, skipped granting will be treated as fail.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk grant entitlements result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createEntitlementGrant(data: BulkEntitlementGrantRequest): Promise<BulkEntitlementGrantResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createEntitlementGrant(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke entitlements, skipped revocation will be treated as fail.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk revoke entitlements result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createEntitlementRevoke(data: string[]): Promise<BulkEntitlementRevokeResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createEntitlementRevoke(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query entitlements by Item Ids.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByItemIds(queryParams?: {
    activeOnly?: boolean | null
    itemIds?: string[]
    limit?: number
    offset?: number
  }): Promise<EntitlementPagingSlicedResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsByItemIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get entitlement config info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsConfigInfo(queryParams?: { withoutCache?: boolean | null }): Promise<EntitlementConfigInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsConfigInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      collectionId?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      fuzzyMatchName?: boolean | null
      itemId?: string[]
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<EntitlementPagingSlicedResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Grant user entitlement.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;will skip un-supported item if input un-supported item types, please use /admin/namespaces/{namespace}/users/{userId}/fulfillment endpoint if want to fulfill other item type, like coin item&lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: granted entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function createEntitlement_ByUserId(userId: string, data: EntitlementGrant[]): Promise<StackableEntitlementInfoArray> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createEntitlement_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlement_ByEntitlementId(entitlementId: string): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlement_ByEntitlementId(entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke all entitlements of a user (This API is for testing purpose only)&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoked entitlements count&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEntitlementRevoke_ByUserId(userId: string): Promise<BulkOperationResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEntitlementRevoke_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null; activeOnly?: boolean | null }
  ): Promise<AppEntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; activeOnly?: boolean | null; limit?: number; offset?: number }
  ): Promise<AppEntitlementPagingSlicedResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlements by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<EntitlementInfoArray> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get platform entitlement config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementConfig_ByPlatform(platform: string): Promise<EntitlementPlatformConfigInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementConfig_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update platform entitlement config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform entitlement config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEntitlementConfig_ByPlatform(
    platform: string,
    data: EntitlementPlatformConfigUpdate
  ): Promise<EntitlementPlatformConfigInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEntitlementConfig_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke user&#39;s entitlements by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlements count&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEntitlementRevokeById_ByUserId(
    userId: string,
    queryParams: { entitlementIds: string | null }
  ): Promise<BulkOperationResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEntitlementRevokeById_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; platform?: string | null; skus?: string[] }
  ): Promise<Ownership> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update user entitlement. If update CONSUMABLE entitlement useCount to 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEntitlement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementUpdate
  ): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEntitlement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any user active entitlement of specified items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipAnyOf_ByUserId(
    userId: string,
    queryParams: { itemIds: string[]; platform?: string | null }
  ): Promise<Ownership> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipAnyOf_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<TimedOwnership> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Enable Entitlement origin feature.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ENTITLEMENT:CONFIG&#34;, action=4 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEntitlementConfigEntitlementOriginEnable(): Promise<EntitlementConfigInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEntitlementConfigEntitlementOriginEnable()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<TimedOwnership> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<EntitlementOwnershipArray> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementSoldRequest
  ): Promise<EntitlementSoldResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateSell_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Enable user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enable entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateEnable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateEnable_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevoke_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRevoke_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Disable user entitlement if entitlement, only active entitlement can be disable, disabled entitlement can&#39;t consume.&lt;br&gt;&lt;b&gt;Like revoke, it will lose the entitlement ownership, except disabled entitlement can enable.&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disable entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDisable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateDisable_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement histories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of entitlement history&lt;/li&gt;&lt;/ul&gt;
   */
  async function getHistory_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementHistoryInfoArray> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getHistory_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementDecrement
  ): Promise<EntitlementDecrementResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateDecrement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Revoke specified use count of user entitlement. please use /{entitlementId}/revoke/byUseCount endpoint instead of this endpoint&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRevokeByUseCount_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: RevokeUseCountRequest
  ): Promise<EntitlementInfo> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateRevokeByUseCount_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Revoke specified count of user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: The revoked entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function createRevokeByUseCount_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: RevokeUseCountRequest
  ): Promise<EntitlementIfc> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRevokeByUseCount_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Checks if specified use count of user entitlement can be revoked without actually revoking it.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=1 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: true if revokable, false otherwise&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    queryParams: { quantity: number }
  ): Promise<EntitlementPrechekResult> {
    const $ = new EntitlementAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(userId, entitlementId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEntitlements,
    createEntitlementGrant,
    createEntitlementRevoke,
    getEntitlementsByItemIds,
    getEntitlementsConfigInfo,
    getEntitlements_ByUserId,
    createEntitlement_ByUserId,
    getEntitlement_ByEntitlementId,
    getEntitlementsBySku_ByUserId,
    updateEntitlementRevoke_ByUserId,
    getEntitlementsByAppId_ByUserId,
    getEntitlementsByItemId_ByUserId,
    getEntitlementsByAppType_ByUserId,
    getEntitlementsByItemIds_ByUserId,
    getEntitlementConfig_ByPlatform,
    updateEntitlementConfig_ByPlatform,
    updateEntitlementRevokeById_ByUserId,
    getEntitlementsOwnershipAny_ByUserId,
    getEntitlement_ByUserId_ByEntitlementId,
    updateEntitlement_ByUserId_ByEntitlementId,
    getEntitlementsOwnershipAnyOf_ByUserId,
    getEntitlementsOwnershipBySku_ByUserId,
    updateEntitlementConfigEntitlementOriginEnable,
    getEntitlementsOwnershipByAppId_ByUserId,
    getEntitlementsOwnershipByItemId_ByUserId,
    getEntitlementsOwnershipByItemIds_ByUserId,
    updateSell_ByUserId_ByEntitlementId,
    updateEnable_ByUserId_ByEntitlementId,
    updateRevoke_ByUserId_ByEntitlementId,
    updateDisable_ByUserId_ByEntitlementId,
    getHistory_ByUserId_ByEntitlementId,
    updateDecrement_ByUserId_ByEntitlementId,
    updateRevokeByUseCount_ByUserId_ByEntitlementId,
    createRevokeByUseCount_ByUserId_ByEntitlementId,
    getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId
  }
}
