/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AppInfo } from '../generated-definitions/AppInfo.js'
import { EstimatedPriceInfoArray } from '../generated-definitions/EstimatedPriceInfoArray.js'
import { ItemDynamicDataInfo } from '../generated-definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from '../generated-definitions/ItemInfo.js'
import { ItemInfoArray } from '../generated-definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from '../generated-definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from '../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from '../generated-definitions/PopulatedItemInfo.js'
import { Item$ } from './endpoints/Item$.js'

export function ItemApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getItemsBySku(queryParams: {
    sku: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<ItemInfo>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

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
  }): Promise<AxiosResponse<ItemPagingSlicedResult>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsSearch(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getItemsByAppId(queryParams: {
    appId: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<ItemInfo>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

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
  }): Promise<AxiosResponse<ItemPagingSlicedResult>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getItemsLocaleByIds(queryParams: {
    itemIds: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<ItemInfoArray>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsLocaleByIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getItemsEstimatedPrice(queryParams: {
    itemIds: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<AxiosResponse<EstimatedPriceInfoArray>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsEstimatedPrice(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLocale_ByItemId(
    itemId: string,
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  ): Promise<AxiosResponse<PopulatedItemInfo>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDynamic_ByItemId(itemId: string): Promise<AxiosResponse<ItemDynamicDataInfo>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDynamic_ByItemId(itemId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { language?: string | null; region?: string | null; storeId?: string | null }
  ): Promise<AxiosResponse<AppInfo>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAppLocale_ByItemId(itemId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createItemPurchaseConditionValidate(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<AxiosResponse<ItemPurchaseConditionValidateResultArray>> {
    const $ = new Item$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemPurchaseConditionValidate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
     */
    getItemsBySku,
    /**
     * This API is used to search items by keyword in title, description and long description, It&#39;s language constrained, also if item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
     */
    getItemsSearch,
    /**
     * This API is used to get item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
     */
    getItemsByAppId,
    /**
     * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
     */
    getItemsByCriteria,
    /**
     * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
     */
    getItemsLocaleByIds,
    /**
     * This API is used to get estimated prices of item
     */
    getItemsEstimatedPrice,
    /**
     * This API is used to get an item in locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
     */
    getLocale_ByItemId,
    /**
     * Get item dynamic data for a published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
     */
    getDynamic_ByItemId,
    /**
     * This API is used to get an app in locale. If app not exist in specific region, default region app will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
     */
    getAppLocale_ByItemId,
    /**
     * This API is used to validate user item purchase condition
     */
    createItemPurchaseConditionValidate
  }
}
