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
import { AppEntitlementInfo } from './definitions/AppEntitlementInfo'
import { AppEntitlementPagingSlicedResult } from './definitions/AppEntitlementPagingSlicedResult'
import { Entitlement$ } from './endpoints/Entitlement$'
import { EntitlementDecrement } from './definitions/EntitlementDecrement'
import { EntitlementDecrementResult } from './definitions/EntitlementDecrementResult'
import { EntitlementInfo } from './definitions/EntitlementInfo'
import { EntitlementOwnershipArray } from './definitions/EntitlementOwnershipArray'
import { EntitlementPagingSlicedResult } from './definitions/EntitlementPagingSlicedResult'
import { EntitlementSoldRequest } from './definitions/EntitlementSoldRequest'
import { EntitlementSoldResult } from './definitions/EntitlementSoldResult'
import { Ownership } from './definitions/Ownership'
import { OwnershipToken } from './definitions/OwnershipToken'
import { TimedOwnership } from './definitions/TimedOwnership'

export function EntitlementApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>
   */
  async function getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
      appType?: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'
      entitlementName?: string | null
      itemId?: string[]
      features?: string[]
      offset?: number
      limit?: number
    }
  ): Promise<EntitlementPagingSlicedResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<AppEntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getUsersMeEntitlementsOwnershipAny(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipAny(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds<p>The decoded ownership token header like below:<p><pre><code>{ "kid": "9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4", "typ": "JWT", "alg": "RS256" } </code></pre>That you can get the jwks by api <baseUrl>/platform/jwks, if the configured private key is same as IAM, <p>you can also get jwks from IAM endpoint. <p>The decoded ownership token payload like below:<p><pre><code>{ "namespace": "accelbyte", "entitlements": [ { "itemId": "4c1296291f604c199f7bb7f0ee02e5f8", "appType": null, "appId": null, "namespace": "accelbyte", "itemNamespace": "accelbyte", "sku": "prime-plus" }, { "itemId": "e8f4974cf45c4e1f8d4f0c6990c518bd", "appType": "GAME", "appId": "omeganebula", "namespace": "accelbyte", "itemNamespace": "accelbyte", "sku": "APPG005ON" } ], "sub": "66459eb6a4e44e6fb0040bd20c1079a5", "exp": 1619624360, "iat": 1619624060 } </code></pre><b>if there's no active entitlement for the specific params, the entitlements section will be omitted</b>.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getUsersMeEntitlementsOwnershipToken(queryParams?: {
    itemIds?: string[]
    appIds?: string[]
    skus?: string[]
  }): Promise<OwnershipToken> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipToken(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Query app entitlements by appType.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: app entitlement pagination</li></ul>
   */
  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'; offset?: number; limit?: number }
  ): Promise<AppEntitlementPagingSlicedResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  async function getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace app entitlement ownership</b></li></ul></li></ul>
   */
  async function getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get my entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:ENTITLEMENT", action=2 (READ)</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher namespace entitlement ownership by sku</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game namespace entitlement ownership by sku</b></li></ul></li></ul>
   */
  async function getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByItemId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  ): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement</li></ul>
   */
  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by sku.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user app entitlement ownership by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
   */
  async function getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
    }
  ): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>
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
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: entitlement</li></ul>
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
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>
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
