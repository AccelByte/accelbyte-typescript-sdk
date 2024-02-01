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
import { AppInfo } from '../generated-definitions/AppInfo.js'
import { EstimatedPriceInfoArray } from '../generated-definitions/EstimatedPriceInfoArray.js'
import { Item$ } from './endpoints/Item$.js'
import { ItemDynamicDataInfo } from '../generated-definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from '../generated-definitions/ItemInfo.js'
import { ItemInfoArray } from '../generated-definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from '../generated-definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from '../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from '../generated-definitions/PopulatedItemInfo.js'

export function ItemApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
   */
  async function getItemsBySku(queryParams: {
    sku: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<ItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to search items by keyword in title, description and long description, It&#39;s language constrained, also if item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getItemsSearch(queryParams: {
    keyword: string | null
    language: string | null
    autoCalcEstimatedPrice?: boolean | null
    itemType?:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
    limit?: number
    offset?: number
    region?: string | null
    storeId?: string | null
  }): Promise<ItemPagingSlicedResult> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
   */
  async function getItemsByAppId(queryParams: {
    appId: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<ItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  async function getItemsByCriteria(queryParams?: {
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    autoCalcEstimatedPrice?: boolean | null
    baseAppId?: string | null
    categoryPath?: string | null
    features?: string | null
    includeSubCategoryItem?: boolean | null
    itemType?:
      | 'APP'
      | 'BUNDLE'
      | 'CODE'
      | 'COINS'
      | 'EXTENSION'
      | 'INGAMEITEM'
      | 'LOOTBOX'
      | 'MEDIA'
      | 'OPTIONBOX'
      | 'SEASON'
      | 'SUBSCRIPTION'
    language?: string | null
    limit?: number
    offset?: number
    region?: string | null
    sortBy?: string[]
    storeId?: string | null
    tags?: string | null
  }): Promise<ItemPagingSlicedResult> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getItemsLocaleByIds(queryParams: {
    itemIds: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<ItemInfoArray> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsLocaleByIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get estimated prices of item
   */
  async function getItemsEstimatedPrice(queryParams: {
    itemIds: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<EstimatedPriceInfoArray> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getItemsEstimatedPrice(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getLocale_ByItemId(
    itemId: string,
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  ): Promise<PopulatedItemInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get item dynamic data for a published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getDynamic_ByItemId(itemId: string): Promise<ItemDynamicDataInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDynamic_ByItemId(itemId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { language?: string | null; region?: string | null; storeId?: string | null }
  ): Promise<AppInfo> {
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
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
    const $ = new Item$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
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
    getItemsEstimatedPrice,
    getLocale_ByItemId,
    getDynamic_ByItemId,
    getAppLocale_ByItemId,
    createItemPurchaseConditionValidate
  }
}
