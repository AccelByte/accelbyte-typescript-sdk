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

  async function getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<AppEntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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

  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'; offset?: number; limit?: number }
  ): Promise<AppEntitlementPagingSlicedResult> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'ENTITLEMENT' | 'CODE' | 'SUBSCRIPTION' | 'MEDIA' | 'OPTIONBOX' | 'LOOTBOX'
  }): Promise<TimedOwnership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersMeEntitlementsOwnershipByItemId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { itemIds?: string[]; appIds?: string[]; skus?: string[] }
  ): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<EntitlementInfo> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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

  async function getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Ownership> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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

  async function getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<EntitlementOwnershipArray> {
    const $ = new Entitlement$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
