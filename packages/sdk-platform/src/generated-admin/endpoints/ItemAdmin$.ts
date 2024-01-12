/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AppUpdate } from '../../generated-definitions/AppUpdate.js'
import { AvailablePredicateArray } from '../../generated-definitions/AvailablePredicateArray.js'
import { BasicItemArray } from '../../generated-definitions/BasicItemArray.js'
import { BulkRegionDataChangeRequest } from '../../generated-definitions/BulkRegionDataChangeRequest.js'
import { EstimatedPriceInfo } from '../../generated-definitions/EstimatedPriceInfo.js'
import { FullAppInfo } from '../../generated-definitions/FullAppInfo.js'
import { FullItemInfo } from '../../generated-definitions/FullItemInfo.js'
import { FullItemInfoArray } from '../../generated-definitions/FullItemInfoArray.js'
import { FullItemPagingResult } from '../../generated-definitions/FullItemPagingResult.js'
import { FullItemPagingSlicedResult } from '../../generated-definitions/FullItemPagingSlicedResult.js'
import { InGameItemSync } from '../../generated-definitions/InGameItemSync.js'
import { ItemAcquireRequest } from '../../generated-definitions/ItemAcquireRequest.js'
import { ItemAcquireResult } from '../../generated-definitions/ItemAcquireResult.js'
import { ItemCreate } from '../../generated-definitions/ItemCreate.js'
import { ItemDynamicDataInfo } from '../../generated-definitions/ItemDynamicDataInfo.js'
import { ItemId } from '../../generated-definitions/ItemId.js'
import { ItemIdArray } from '../../generated-definitions/ItemIdArray.js'
import { ItemInfoArray } from '../../generated-definitions/ItemInfoArray.js'
import { ItemPurchaseConditionValidateRequest } from '../../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { ItemReturnRequest } from '../../generated-definitions/ItemReturnRequest.js'
import { ItemTypeConfigCreate } from '../../generated-definitions/ItemTypeConfigCreate.js'
import { ItemTypeConfigInfo } from '../../generated-definitions/ItemTypeConfigInfo.js'
import { ItemTypeConfigInfoArray } from '../../generated-definitions/ItemTypeConfigInfoArray.js'
import { ItemTypeConfigUpdate } from '../../generated-definitions/ItemTypeConfigUpdate.js'
import { ItemUpdate } from '../../generated-definitions/ItemUpdate.js'
import { PopulatedItemInfo } from '../../generated-definitions/PopulatedItemInfo.js'
import { PurchaseConditionUpdate } from '../../generated-definitions/PurchaseConditionUpdate.js'

export class ItemAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get all item type configs.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsConfigs(): Promise<IResponseWithSync<ItemTypeConfigInfoArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/items/configs'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemTypeConfigInfoArray, 'ItemTypeConfigInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create an item type config.&lt;p&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
   */
  createItemConfig(data: ItemTypeConfigCreate): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/items/configs'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to delete an item type config permanently.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteItemConfig_ById(id: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/items/configs/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get an item type config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
   */
  getItemConfig_ById(id: string): Promise<IResponseWithSync<ItemTypeConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/items/configs/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemTypeConfigInfo, 'ItemTypeConfigInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update an item type config.&lt;p&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
   */
  updateItemConfig_ById(id: string, data: ItemTypeConfigUpdate): Promise<IResponse<ItemTypeConfigInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/items/configs/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, ItemTypeConfigInfo, 'ItemTypeConfigInfo')
  }

  /**
   * This API is used to get an item type config.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:ITEM:CONFIG&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item type config data&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsConfigsSearch(queryParams: {
    itemType:
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
    clazz?: string | null
  }): Promise<IResponseWithSync<ItemTypeConfigInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/items/configs/search'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemTypeConfigInfo, 'ItemTypeConfigInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to create an item. APP item only can created in publisher namespace.&lt;p&gt;An item create example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;title&#34;:&#34;required&#34;, &#34;description&#34;:&#34;optional&#34;, &#34;longDescription&#34;:&#34;optional&#34;, &#34;localExt&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \} \} \}, &#34;images&#34;: \[ \{ &#34;as&#34;:&#34;optional, image for&#34;, &#34;caption&#34;:&#34;optional&#34;, &#34;height&#34;:10, &#34;width&#34;:10, &#34;imageUrl&#34;:&#34;http://img-url-required&#34;, &#34;smallImageUrl&#34;:&#34;http://small-img-url-required&#34; \} \], &#34;thumbnailUrl&#34;: &#34;optional, thumbnail url&#34;, &#34;status&#34;: &#34;ACTIVE&#34;, &#34;listable&#34;: true, &#34;purchasable&#34;: true, &#34;itemType&#34;: &#34;APP(allowed: [APP,COINS,INGAMEITEM,CODE,BUNDLE])&#34;, &#34;name&#34;: &#34;required, also will be used as entitlement name&#34;, &#34;entitlementType&#34;: &#34;DURABLE(allowed:[DURABLE,CONSUMABLE], should be CONSUMABLE when item type is COINS)&#34;, &#34;useCount&#34;: 1(optional, required if the entitlement type is consumable), &#34;stackable&#34;: false, &#34;appId&#34;: &#34;optional, required if itemType is APP&#34;, &#34;appType&#34;: &#34;GAME(optional, required if itemType is APP)&#34;, &#34;seasonType&#34;: &#34;PASS(optional, required if itemType is SEASON)&#34;, &#34;baseAppId&#34;: &#34;optional, set value of game app id if you want to link to a game&#34;, &#34;targetCurrencyCode&#34;: &#34;optional, required if itemType is COINS&#34;, &#34;targetNamespace&#34;: &#34;optional, required when itemType is INGAMEITEM, the targetNamespace will only take effect when the item created belongs to the publisher namespace&#34;, &#34;sku&#34;: &#34;optional, commonly unique item code&#34;, &#34;regionData&#34;: \{ &#34;US(store&#39;s default region is required)&#34;: \[ \{ &#34;price&#34;:10, &#34;discountPercentage&#34;: 0(integer, optional, range[0,100], discountedPrice = price \* ((100 - discountPercentage) \* 0.01), will use it to calculate discounted price if it is not 0), &#34;discountAmount&#34;:0(integer, optional, range[0,itemPrice], will use it to calculate discounted price if discountPercentage is 0), &#34;currencyCode&#34;:&#34;code(required, example: USD)&#34;, &#34;currencyNamespace&#34;:&#34;test-ns-required(allow publisher namespace if namespace is publisher namespace, allow publisher and game namespace if namespace is not publisher namespace)&#34;, &#34;trialPrice&#34;:5(required while fixedTrialCycles set, should &gt;=0 and &lt;= price, will same as price if not present), &#34;purchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;expireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountPurchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountExpireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; \} \] \}, &#34;itemIds&#34;: \[ &#34;itemId&#34; \], &#34;itemQty&#34;: \{ &#34;itemId&#34;:1 \}, &#34;recurring&#34;: \{ &#34;cycle&#34;:&#34;MONTHLY(allowed: [WEEKLY,MONTHLY,QUARTERLY,YEARLY])&#34;, &#34;fixedFreeDays&#34;:0(integer, fixed free days, 0 means not set), &#34;fixedTrialCycles&#34;:0(integer, fixed trial cycles, 0 means not set, will not take effect if fixedFreeDays set), &#34;graceDays&#34;:7(integer, recurring grace days, retry recurring charge within configured days if charge fail, default 7) \}, &#34;tags&#34;: \[ &#34;exampleTag24&#34; \], &#34;features&#34;: \[ &#34;feature&#34; \], &#34;clazz&#34;: &#34;weapon&#34;, &#34;boothName&#34;: &#34;C_campaign1&#34;, &#34;displayOrder&#34;: 1000, &#34;ext&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \}, &#34;maxCountPerUser&#34;: 1(integer, optional, -1 means UNLIMITED), &#34;maxCount&#34;: 1(integer, optional, -1 means UNLIMITED, unset when itemType is CODE) }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created item data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for item extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createItem(data: ItemCreate, queryParams: { storeId: string | null }): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to sync an in game item in game namespace to publisher namespace, only INGAMEITEM, CODE, COINS and SEASON are supported&lt;p&gt;The synced item has an additional field targetItemId besides targetNamespace, mostly this item should not modified manually again. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  updateItem(data: InGameItemSync, queryParams: { storeId: string | null }): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to get items.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByIds(queryParams: {
    itemIds: string | null
    activeOnly?: boolean | null
    storeId?: string | null
  }): Promise<IResponseWithSync<FullItemInfoArray>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/byIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemInfoArray, 'FullItemInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get the item by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with sku&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsBySku(queryParams: {
    sku: string | null
    activeOnly?: boolean | null
    storeId?: string | null
  }): Promise<IResponseWithSync<FullItemInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to search items by keyword in title, description and long description within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsSearch(queryParams: {
    keyword: string | null
    language: string | null
    activeOnly?: boolean | null
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
    sortBy?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<FullItemPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, sortBy: 'name:asc,createdAt:asc', ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/search'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemPagingSlicedResult, 'FullItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get the item by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the item with that appId&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByAppId(queryParams: {
    appId: string | null
    activeOnly?: boolean | null
    storeId?: string | null
  }): Promise<IResponseWithSync<FullItemInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to delete an item permanently.&lt;p&gt;force: the default value should be: false. When the value is: &lt;li&gt;&lt;i&gt;false:&lt;i&gt;only the items in the draft store that have never been published yet can be removed.&lt;/li&gt;&lt;li&gt;&lt;i&gt;true:&lt;i&gt;the item in the draft store(even been published before) can be removed.&lt;/li&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteItem_ByItemId(itemId: string, queryParams?: { force?: boolean | null; storeId?: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}'.replace('{namespace}', this.namespace).replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get an item.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getItem_ByItemId(
    itemId: string,
    queryParams?: { activeOnly?: boolean | null; storeId?: string | null }
  ): Promise<IResponseWithSync<FullItemInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}'.replace('{namespace}', this.namespace).replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update an item.&lt;p&gt;An item update example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;title&#34;:&#34;required&#34;, &#34;description&#34;:&#34;optional&#34;, &#34;longDescription&#34;:&#34;optional&#34;, &#34;localExt&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \} \} \}, &#34;images&#34;: \[ \{ &#34;as&#34;:&#34;optional, image for&#34;, &#34;caption&#34;:&#34;optional&#34;, &#34;height&#34;:10, &#34;width&#34;:10, &#34;imageUrl&#34;:&#34;http://img-url-required&#34;, &#34;smallImageUrl&#34;:&#34;http://small-img-url-required&#34; \} \], &#34;thumbnailUrl&#34;: &#34;optional, thumbnail url&#34;, &#34;status&#34;: &#34;ACTIVE&#34;, &#34;listable&#34;: true, &#34;purchasable&#34;: true, &#34;itemType&#34;: &#34;APP(allowed: [APP,COINS,INGAMEITEM,CODE,BUNDLE])&#34;, &#34;name&#34;: &#34;optional&#34;, &#34;entitlementType&#34;: &#34;DURABLE(allowed:[DURABLE,CONSUMABLE], should be CONSUMABLE when item type is COINS)&#34;, &#34;useCount&#34;: 1(optional, required if the entitlement type is consumable), &#34;stackable&#34;: false, &#34;appId&#34;: &#34;optional, required if itemType is APP&#34;, &#34;baseAppId&#34;: &#34;optional, set value of game app id if you want to link to a game&#34;, &#34;appType&#34;: &#34;GAME(optional, required if itemType is APP)&#34;, &#34;seasonType&#34;: &#34;PASS(optional, required if itemType is SEASON)&#34;, &#34;sku&#34;: &#34;optional, commonly unique item code&#34;, &#34;targetCurrencyCode&#34;: &#34;optional, required if itemType is COINS&#34;, &#34;targetNamespace&#34;: &#34;optional, required when itemType is INGAMEITEM, the targetNamespace will only take effect when the item created belongs to the publisher namespace&#34;, &#34;regionData&#34;: \{ &#34;US(store&#39;s default region is required)&#34;: \[ \{ &#34;price&#34;:10, &#34;discountPercentage&#34;:0(integer, optional, range[0,100], discountedPrice = price\*((100 - discountPercentage) \* 0.01), if it is not 0, will use it to calculate discounted price), &#34;discountAmount&#34;:0(integer, optional, range[0,itemPrice], will use it to calculate discounted price if discountPercentage is 0), &#34;currencyCode&#34;:&#34;code(required, example: USD)&#34;, &#34;currencyNamespace&#34;:&#34;test-ns-required(allow publisher namespace if namespace is publisher namespace, allow publisher and game namespace if namespace is not publisher namespace)&#34;, &#34;trialPrice&#34;:5(required while fixedTrialCycles set, should &gt;=0 and &lt;= price, will same as price if not present), &#34;purchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;expireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountPurchaseAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34;, &#34;discountExpireAt&#34;:&#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; \} \] \}, &#34;itemIds&#34;: \[ &#34;itemId&#34; \], &#34;itemQty&#34;: \{ &#34;itemId&#34;:1 \}, &#34;recurring&#34;: \{ &#34;cycle&#34;:&#34;MONTHLY(allowed: [WEEKLY,MONTHLY,QUARTERLY,YEARLY])&#34;, &#34;fixedFreeDays&#34;:0(integer, fixed free days, 0 means not set), &#34;fixedTrialCycles&#34;:0(integer, fixed trial cycles, 0 means not set, will not take effect if fixedFreeDays set), &#34;graceDays&#34;:7(integer, recurring grace days, retry recurring charge within configured days if charge fail, default 7) \}, &#34;tags&#34;: \[ &#34;exampleTag24&#34; \], &#34;features&#34;: \[ &#34;feature&#34; \], &#34;clazz&#34;: &#34;weapon&#34;, &#34;boothName&#34;: &#34;C_campaign1&#34;, &#34;displayOrder&#34;: 1000, &#34;ext&#34;: \{ &#34;properties&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \], &#34;functions&#34;:\[ \{ &#34;key1&#34;:&#34;value1&#34;, &#34;key2&#34;:&#34;value2&#34; \} \] \}, &#34;maxCountPerUser&#34;: 1(integer, optional, -1 means UNLIMITED), &#34;maxCount&#34;: 1(integer, optional, -1 means UNLIMITED, new value should &gt;= old value if both old value and new value is limited, unset when item type is CODE) }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for item extension and localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  updateItem_ByItemId(itemId: string, data: ItemUpdate, queryParams: { storeId: string | null }): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}'.replace('{namespace}', this.namespace).replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to query items by criteria within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByCriteria(queryParams?: {
    activeOnly?: boolean | null
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    availableDate?: string | null
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
    limit?: number
    offset?: number
    region?: string | null
    sortBy?: string[]
    storeId?: string | null
    tags?: string | null
    targetNamespace?: string | null
  }): Promise<IResponseWithSync<FullItemPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, sortBy: ['name:asc', 'displayOrder:asc'], ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemPagingSlicedResult, 'FullItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update region data of items in bulk &lt;br /&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateItemRegiondata(data: BulkRegionDataChangeRequest, queryParams: { storeId: string | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/regiondata'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to get an app info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app data&lt;/li&gt;&lt;/ul&gt;
   */
  getApp_ByItemId(
    itemId: string,
    queryParams?: { activeOnly?: boolean | null; storeId?: string | null }
  ): Promise<IResponseWithSync<FullAppInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/app'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullAppInfo, 'FullAppInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to update an app.&lt;p&gt;An app update example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;developer&#34;: &#34;accelbyte&#34;, &#34;publisher&#34;: &#34;accelbyte&#34;, &#34;websiteUrl&#34;: &#34;http://accelbyte.io&#34;, &#34;forumUrl&#34;: &#34;http://accelbyte.io&#34;, &#34;platforms&#34;: \[&#34;Windows(allowed values: Windows, MacOS, Linux, IOS, Android)&#34;\], &#34;platformRequirements&#34;: \{ &#34;Windows&#34;: \[ \{ &#34;label&#34;:&#34;minimum(can be minimum or recommended)&#34;, &#34;osVersion&#34;:&#34;os version&#34;, &#34;processor&#34;:&#34;processor&#34;, &#34;ram&#34;:&#34;RAM&#34;, &#34;graphics&#34;:&#34;graphics&#34;, &#34;directXVersion&#34;:&#34;directXVersion&#34;, &#34;diskSpace&#34;:&#34;diskSpace&#34;, &#34;soundCard&#34;:&#34;soundCard&#34;, &#34;additionals&#34;:&#34;additionals&#34; \} \] \}, &#34;carousel&#34;: \[ \{ &#34;type&#34;:&#34;image(allowed values: image, video)&#34;, &#34;videoSource&#34;:&#34;generic(allowed values:generic, youtube, viemo)&#34;, &#34;url&#34;:&#34;url&#34;, &#34;alt&#34;:&#34;alternative url or text&#34;, &#34;thumbnailUrl&#34;:&#34;thumbnail url&#34;, &#34;previewUrl&#34;:&#34;preview url&#34;, \} \], &#34;localizations&#34;: \{ &#34;en&#34;: \{ &#34;slogan&#34;:&#34;slogan&#34;, &#34;announcement&#34;:&#34;announcement&#34;, \} \}, &#34;primaryGenre&#34;: &#34;Action&#34;, &#34;genres&#34;: \[&#34;Action&#34;, &#34;Adventure&#34;\], &#34;players&#34;: \[&#34;Single&#34;\], &#34;releaseDate&#34;: &#34;optional yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSS&#39;Z&#39;&#34; }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated app data&lt;/li&gt;&lt;/ul&gt;
   */
  updateApp_ByItemId(itemId: string, data: AppUpdate, queryParams: { storeId: string | null }): Promise<IResponse<FullAppInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/app'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, FullAppInfo, 'FullAppInfo')
  }

  /**
   * This API is used to get an item by sku in specific locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsBySkuLocale(queryParams: {
    sku: string | null
    activeOnly?: boolean | null
    language?: string | null
    populateBundle?: boolean | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<PopulatedItemInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/bySku/locale'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PopulatedItemInfo, 'PopulatedItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to get the itemId by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the itemId with sku&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsItemIdBySku(queryParams: {
    sku: string | null
    activeOnly?: boolean | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemId>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/itemId/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemId, 'ItemId')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to bulk get locale items. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items info&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsLocaleByIds(queryParams: {
    itemIds: string | null
    activeOnly?: boolean | null
    language?: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<ItemInfoArray>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/locale/byIds'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemInfoArray, 'ItemInfoArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get an list of itemId by list of sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsItemIdBySkus(queryParams?: { sku?: string[]; storeId?: string | null }): Promise<IResponseWithSync<ItemIdArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/itemId/bySkus'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemIdArray, 'ItemIdArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to query uncategorized items within a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of uncategorized items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsUncategorized(queryParams?: {
    activeOnly?: boolean | null
    limit?: number
    offset?: number
    sortBy?: string[]
    storeId?: string | null
  }): Promise<IResponseWithSync<FullItemPagingSlicedResult>> {
    const params = { activeOnly: true, limit: 20, sortBy: ['name:asc'], ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/uncategorized'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemPagingSlicedResult, 'FullItemPagingSlicedResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to query items by criteria within a store.&lt;p&gt;The behaviour for itemStatus query parameter:&lt;li&gt;TRUE: Show only ACTIVE items&lt;/li&gt;&lt;li&gt;FALSE: Show only INACTIVE items&lt;/li&gt;&lt;li&gt;Not provided: show both ACTIVE and INACTIVE items&lt;/li&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByCriteria_ByNS(queryParams?: {
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    availableDate?: string | null
    baseAppId?: string | null
    categoryPath?: string | null
    features?: string | null
    includeSubCategoryItem?: boolean | null
    itemName?: string | null
    itemStatus?: 'ACTIVE' | 'INACTIVE'
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
    sectionExclusive?: boolean | null
    sortBy?: string[]
    storeId?: string | null
    tags?: string | null
    targetNamespace?: string | null
    withTotal?: boolean | null
  }): Promise<IResponseWithSync<FullItemPagingResult>> {
    const params = { limit: 20, sortBy: ['name:asc', 'displayOrder:asc'], ...queryParams } as SDKRequestConfig
    const url = '/platform/v2/admin/namespaces/{namespace}/items/byCriteria'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, FullItemPagingResult, 'FullItemPagingResult')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get estimated prices of a flexible pricing bundle
   */
  getItemsEstimatedPrice(queryParams: {
    itemIds: string | null
    userId: string | null
    region?: string | null
    storeId?: string | null
  }): Promise<IResponseWithSync<EstimatedPriceInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/estimatedPrice'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EstimatedPriceInfo, 'EstimatedPriceInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Enable an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
   */
  updateEnable_ByItemId(itemId: string, queryParams: { storeId: string | null }): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/enable'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to get an item in specific locale. If item not exist in specific region, default region item will return.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item data&lt;/li&gt;&lt;/ul&gt;
   */
  getLocale_ByItemId(
    itemId: string,
    queryParams?: {
      activeOnly?: boolean | null
      language?: string | null
      populateBundle?: boolean | null
      region?: string | null
      storeId?: string | null
    }
  ): Promise<IResponseWithSync<PopulatedItemInfo>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/locale'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PopulatedItemInfo, 'PopulatedItemInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This api is used for returning a published item while the item is maxCount limited, it will increase the sale available count if orderNo already acquired.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateReturn_ByItemId(itemId: string, data: ItemReturnRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/return'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get available predicate types.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=ADMIN:NAMESPACE:{namespace}:ITEM, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: available predicate types&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsPredicateTypes(): Promise<IResponseWithSync<AvailablePredicateArray>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/predicate/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, AvailablePredicateArray, 'AvailablePredicateArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This api is used for acquiring a published item while the item is maxCount limited, it will decrease the sale available count.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: acquire result&lt;/li&gt;&lt;/ul&gt;
   */
  updateAcquire_ByItemId(itemId: string, data: ItemAcquireRequest): Promise<IResponse<ItemAcquireResult>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/acquire'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, ItemAcquireResult, 'ItemAcquireResult')
  }

  /**
   * Disable an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
   */
  updateDisable_ByItemId(itemId: string, queryParams: { storeId: string | null }): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/disable'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * Get item dynamic data for published item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: item dynamic data&lt;/li&gt;&lt;/ul&gt;
   */
  getDynamic_ByItemId(itemId: string): Promise<IResponseWithSync<ItemDynamicDataInfo>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/dynamic'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ItemDynamicDataInfo, 'ItemDynamicDataInfo')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to list basic items by features.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of basic items&lt;/li&gt;&lt;/ul&gt;
   */
  getItemsByFeaturesBasic(queryParams?: { activeOnly?: boolean | null; features?: string[] }): Promise<IResponseWithSync<BasicItemArray>> {
    const params = { activeOnly: true, ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/byFeatures/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, BasicItemArray, 'BasicItemArray')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Remove a feature from an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
   */
  deleteFeature_ByItemId_ByFeature(
    itemId: string,
    feature: string,
    queryParams: { storeId: string | null }
  ): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/features/{feature}'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
      .replace('{feature}', feature)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * Add a feature to an item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:ITEM&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated item&lt;/li&gt;&lt;/ul&gt;
   */
  updateFeature_ByItemId_ByFeature(
    itemId: string,
    feature: string,
    queryParams: { storeId: string | null }
  ): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/features/{feature}'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
      .replace('{feature}', feature)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to update item purchase condition
   */
  updatePurchaseCondition_ByItemId(
    itemId: string,
    data: PurchaseConditionUpdate,
    queryParams: { storeId: string | null }
  ): Promise<IResponse<FullItemInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/{itemId}/purchase/condition'
      .replace('{namespace}', this.namespace)
      .replace('{itemId}', itemId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => resultPromise, FullItemInfo, 'FullItemInfo')
  }

  /**
   * This API is used to validate user purchase condition
   */
  createItemPurchaseConditionValidate(
    data: ItemPurchaseConditionValidateRequest,
    queryParams: { userId: string | null }
  ): Promise<IResponse<ItemPurchaseConditionValidateResultArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/items/purchase/conditions/validate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ItemPurchaseConditionValidateResultArray, 'ItemPurchaseConditionValidateResultArray')
  }
}
