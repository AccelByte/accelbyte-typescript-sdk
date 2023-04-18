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
import { AppInfo } from './definitions/AppInfo'
import { Item$ } from './endpoints/Item$'
import { ItemDynamicDataInfo } from './definitions/ItemDynamicDataInfo'
import { ItemInfo } from './definitions/ItemInfo'
import { ItemInfoArray } from './definitions/ItemInfoArray'
import { ItemPagingSlicedResult } from './definitions/ItemPagingSlicedResult'
import { ItemPurchaseConditionValidateRequest } from './definitions/ItemPurchaseConditionValidateRequest'
import { ItemPurchaseConditionValidateResultArray } from './definitions/ItemPurchaseConditionValidateResultArray'
import { PopulatedItemInfo } from './definitions/PopulatedItemInfo'

export function ItemApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

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

  async function getLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null; populateBundle?: boolean | null }
  ): Promise<PopulatedItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getDynamic_ByItemId(itemId: string): Promise<ItemDynamicDataInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getDynamic_ByItemId(itemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { storeId?: string | null; region?: string | null; language?: string | null }
  ): Promise<AppInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAppLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

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
