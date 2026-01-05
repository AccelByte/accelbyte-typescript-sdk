/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AppInfo } from '../../generated-definitions/AppInfo.js'
import { EstimatedPriceInfoArray } from '../../generated-definitions/EstimatedPriceInfoArray.js'
import { ItemDynamicDataInfo } from '../../generated-definitions/ItemDynamicDataInfo.js'
import { ItemInfo } from '../../generated-definitions/ItemInfo.js'
import { ItemInfoArray } from '../../generated-definitions/ItemInfoArray.js'
import { ItemPagingSlicedResult } from '../../generated-definitions/ItemPagingSlicedResult.js'
import { ItemPurchaseConditionValidateRequest } from '../../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { PopulatedItemInfo } from '../../generated-definitions/PopulatedItemInfo.js'

export class Item$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsBySku(queryParams: {
    sku: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<Response<ItemInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemInfo, 'ItemInfo')
  }
  /**
   * This API is used to search items by keyword in title, description and long description, It&#39;s language constrained, also if item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsSearch(queryParams: {
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
  }): Promise<Response<ItemPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ItemPagingSlicedResult,
      'ItemPagingSlicedResult'
    )
  }
  /**
   * This API is used to get item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByAppId(queryParams: {
    appId: string | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<Response<ItemInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemInfo, 'ItemInfo')
  }
  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByCriteria(queryParams?: {
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
  }): Promise<Response<ItemPagingSlicedResult>> {
    const params = { limit: 20, sortBy: ['name:asc', 'displayOrder:asc'], ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ItemPagingSlicedResult,
      'ItemPagingSlicedResult'
    )
  }
  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store items)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsLocaleByIds(queryParams: {
    itemIds: string | null
    autoCalcEstimatedPrice?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<Response<ItemInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/locale/byIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemInfoArray, 'ItemInfoArray')
  }
  /**
   * This API is used to get estimated prices of item
   */
  getItemsEstimatedPrice(queryParams: {
    itemIds: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<Response<EstimatedPriceInfoArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/estimatedPrice'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EstimatedPriceInfoArray,
      'EstimatedPriceInfoArray'
    )
  }
  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store item)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getLocale_ByItemId(
    itemId: string,
    queryParams?: {
      autoCalcEstimatedPrice?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  ): Promise<Response<PopulatedItemInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PopulatedItemInfo, 'PopulatedItemInfo')
  }
  /**
   * Get item dynamic data for a published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByItemId(itemId: string): Promise<Response<ItemDynamicDataInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ItemDynamicDataInfo, 'ItemDynamicDataInfo')
  }
  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;PREVIEW&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1(CREATE) (user with this permission can view draft store app)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
   */
  getAppLocale_ByItemId(
    itemId: string,
    queryParams?: { language?: string | null; region?: string | null; storeId?: string | null }
  ): Promise<Response<AppInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/{itemId}/app/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppInfo, 'AppInfo')
  }
  /**
   * This API is used to validate user item purchase condition
   */
  createItemPurchaseConditionValidate(
    data: ItemPurchaseConditionValidateRequest
  ): Promise<Response<ItemPurchaseConditionValidateResultArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/items/purchase/conditions/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ItemPurchaseConditionValidateResultArray,
      'ItemPurchaseConditionValidateResultArray'
    )
  }
}
