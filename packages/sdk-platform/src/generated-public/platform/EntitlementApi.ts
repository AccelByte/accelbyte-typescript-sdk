/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AppEntitlementInfo } from './definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from './definitions/AppEntitlementPagingSlicedResult.js'
import { Entitlement$ } from './endpoints/Entitlement$.js'
import { EntitlementDecrement } from './definitions/EntitlementDecrement.js'
import { EntitlementDecrementResult } from './definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from './definitions/EntitlementInfo.js'
import { EntitlementOwnershipArray } from './definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from './definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from './definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from './definitions/EntitlementSoldResult.js'
import { Ownership } from './definitions/Ownership.js'
import { OwnershipToken } from './definitions/OwnershipToken.js'
import { TimedOwnership } from './definitions/TimedOwnership.js'

export function EntitlementApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query user entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      itemId?: string[]
      limit?: number
      offset?: number
    }
  ): Promise<EntitlementPagingSlicedResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<AppEntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeEntitlementsOwnershipAny(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipAny(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds&lt;p&gt;The decoded ownership token header like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;kid&#34;: &#34;9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4&#34;, &#34;typ&#34;: &#34;JWT&#34;, &#34;alg&#34;: &#34;RS256&#34; } &lt;/code&gt;&lt;/pre&gt;That you can get the jwks by api &lt;baseUrl&gt;/platform/jwks, if the configured private key is same as IAM, &lt;p&gt;you can also get jwks from IAM endpoint. &lt;p&gt;The decoded ownership token payload like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;entitlements&#34;: [ { &#34;itemId&#34;: &#34;4c1296291f604c199f7bb7f0ee02e5f8&#34;, &#34;appType&#34;: null, &#34;appId&#34;: null, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;prime-plus&#34; }, { &#34;itemId&#34;: &#34;e8f4974cf45c4e1f8d4f0c6990c518bd&#34;, &#34;appType&#34;: &#34;GAME&#34;, &#34;appId&#34;: &#34;omeganebula&#34;, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;APPG005ON&#34; } ], &#34;sub&#34;: &#34;66459eb6a4e44e6fb0040bd20c1079a5&#34;, &#34;exp&#34;: 1619624360, &#34;iat&#34;: 1619624060 } &lt;/code&gt;&lt;/pre&gt;&lt;b&gt;if there&#39;s no active entitlement for the specific params, the entitlements section will be omitted&lt;/b&gt;.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeEntitlementsOwnershipToken(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<OwnershipToken> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipToken(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; limit?: number; offset?: number }
  ): Promise<AppEntitlementPagingSlicedResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace app entitlement ownership&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  async function getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByItemId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] }
  ): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemIds.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  async function getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<EntitlementOwnershipArray> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSoldRequest
  ): Promise<EntitlementSoldResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateSell_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementDecrement
  ): Promise<EntitlementDecrementResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateDecrement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getEntitlements_ByUserId,
    getEntitlementsBySku_ByUserId,
    getEntitlementsByAppId_ByUserId,
    getUsersMeEntitlementsOwnershipAny,
    getEntitlementsByItemId_ByUserId,
    getUsersMeEntitlementsOwnershipToken,
    getEntitlementsByAppType_ByUserId,
    getUsersMeEntitlementsOwnershipBySku,
    getUsersMeEntitlementsOwnershipByAppId,
    getUsersMeEntitlementsOwnershipByItemId,
    getEntitlementsOwnershipAny_ByUserId,
    getEntitlement_ByUserId_ByEntitlementId,
    getEntitlementsOwnershipBySku_ByUserId,
    getEntitlementsOwnershipByAppId_ByUserId,
    getEntitlementsOwnershipByItemId_ByUserId,
    getEntitlementsOwnershipByItemIds_ByUserId,
    updateSell_ByUserId_ByEntitlementId,
    updateDecrement_ByUserId_ByEntitlementId
  }
}
