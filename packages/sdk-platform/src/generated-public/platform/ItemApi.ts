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
import { AppInfo } from './definitions/AppInfo.js'
import { Item$ } from './endpoints/Item$.js'
import { ItemDynamicDataInfo } from './definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from './definitions/ItemInfo.js'
import { ItemInfoArray } from './definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from './definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from './definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from './definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from './definitions/PopulatedItemInfo.js'

export function ItemApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * This API is used to get the item by sku.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with sku</li></ul>
   */
  async function getItemsBySku(queryParams: {
    storeId?: string | null
    sku: string | null
    language?: string | null
    region?: string | null
  }): Promise<ItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getItemsBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to search items by keyword in title, description and long description, It's language constrained, also if item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  async function getItemsSearch(queryParams: {
    storeId?: string | null
    language: string | null
    keyword: string | null
    itemType?:
      | 'APP'
      | 'COINS'
      | 'INGAMEITEM'
      | 'BUNDLE'
      | 'CODE'
      | 'SUBSCRIPTION'
      | 'SEASON'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'EXTENSION'
      | 'LOOTBOX'
    region?: string | null
    offset?: number
    limit?: number
  }): Promise<ItemPagingSlicedResult> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getItemsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get item by appId.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with that appId</li></ul>
   */
  async function getItemsByAppId(queryParams: {
    storeId?: string | null
    appId: string | null
    language?: string | null
    region?: string | null
  }): Promise<ItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getItemsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  async function getItemsByCriteria(queryParams?: {
    storeId?: string | null
    language?: string | null
    region?: string | null
    categoryPath?: string | null
    includeSubCategoryItem?: boolean | null
    itemType?:
      | 'APP'
      | 'COINS'
      | 'INGAMEITEM'
      | 'BUNDLE'
      | 'CODE'
      | 'SUBSCRIPTION'
      | 'SEASON'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'EXTENSION'
      | 'LOOTBOX'
    appType?: 'GAME' | 'SOFTWARE' | 'DLC' | 'DEMO'
    baseAppId?: string | null
    tags?: string | null
    features?: string | null
    offset?: number
    limit?: number
    sortBy?: string | null
  }): Promise<ItemPagingSlicedResult> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getItemsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store items)</li><li><i>Returns</i>: the list of items info</li></ul>
   */
  async function getItemsLocaleByIds(queryParams: {
    storeId?: string | null
    itemIds: string | null
    region?: string | null
    language?: string | null
  }): Promise<ItemInfoArray> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getItemsLocaleByIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: item data</li></ul>
   */
  async function getLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null; populateBundle?: boolean | null }
  ): Promise<PopulatedItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get item dynamic data for a published item.<br>Other detail info: <ul><li><i>Returns</i>: item dynamic data</li></ul>
   */
  async function getDynamic_ByItemId(itemId: string): Promise<ItemDynamicDataInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDynamic_ByItemId(itemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Returns</i>: app data</li></ul>
   */
  async function getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null }
  ): Promise<AppInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAppLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to validate user item purchase condition
   */
  async function createItemPurchaseConditionValidate(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<ItemPurchaseConditionValidateResultArray> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createItemPurchaseConditionValidate(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getItemsBySku,
    getItemsSearch,
    getItemsByAppId,
    getItemsByCriteria,
    getItemsLocaleByIds,
    getLocale_ByItemId,
    getDynamic_ByItemId,
    getAppLocale_ByItemId,
    createItemPurchaseConditionValidate
  }
}
