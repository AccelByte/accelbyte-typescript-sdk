/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { ItemInfo } from '@accelbyte/sdk/generated-public/platform/definitions/ItemInfo'
import { ItemPagingSlicedResult } from '@accelbyte/sdk/generated-public/platform/definitions/ItemPagingSlicedResult'
import { ItemPurchaseConditionValidateRequest } from '@accelbyte/sdk/generated-public/platform/definitions/ItemPurchaseConditionValidateRequest'
import { Item$ } from '@accelbyte/sdk/generated-public/platform/Item$'
import { Network } from '@accelbyte/sdk/utils/Network'
import { IResponseWithSync } from '@accelbyte/sdk/utils/Validate'

type QueryParams = { storeId?: string | null; region?: string | null; language?: string | null }
type QueryParamsItemIds = { storeId?: string | null; region?: string | null; language?: string | null; itemIds: string | null }

export class ItemApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * This API is used to get item by appId.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with that appId</li></ul>
   */
  getItemByAppId({ ...queryParams }: { storeId?: string; appId: string; language?: string; region?: string }) {
    return this.newInstance().fetchItemsByAppId(queryParams)
  }

  /**
   * Get item dynamic data for a published item.<br>Other detail info: <ul><li><i>Returns</i>: item dynamic data</li></ul>
   */
  getItemByItemIdDynamic(itemId: string) {
    return this.newInstance().fetchItemsByItemidDynamic(itemId)
  }

  fetchItemsByCriteria({
    queryParams
  }: {
    queryParams?: Parameters<Item$['fetchItemsByCriteria']>[0]
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    return this.newInstance().fetchItemsByCriteria(queryParams)
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>
   */
  getItemsByItemIds({ queryParams }: { queryParams: QueryParamsItemIds }) {
    return this.newInstance().fetchItemsLocaleByIds(queryParams)
  }

  /**
   * Fetch the items and convert it into a map of `itemId` and its item info
   */
  async fetchAvailableItemInfoMap({ queryParams }: { queryParams: QueryParamsItemIds }) {
    const result = await this.getItemsByItemIds({ queryParams })
    if (result.response) {
      return {
        error: null,
        value: result.response.data.reduce((map: Map<string, ItemInfo>, availableItemInfo) => {
          const { itemId } = availableItemInfo
          if (itemId) {
            map.set(itemId, availableItemInfo)
          }
          return map
        }, new Map())
      }
    }
    return result
  }

  /**
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: item data</li></ul>
   */
  getItemsByItemIdLocale({ itemId, queryParams }: { itemId: string; queryParams?: Parameters<Item$['fetchItemsByItemidLocale']>[1] }) {
    return this.newInstance().fetchItemsByItemidLocale(itemId, queryParams)
  }

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Returns</i>: app data</li></ul>
   */
  getAppInfoByItemId({ itemId, queryParams }: { itemId: string; queryParams?: QueryParams }) {
    return this.newInstance().fetchItemsByItemidAppLocale(itemId, queryParams)
  }

  /**
   * This API is used to validate user item purchase condition
   */
  validatePurchaseCondition(data: ItemPurchaseConditionValidateRequest) {
    return this.newInstance().postItemsPurchaseConditionsValidate(data)
  }

  private newInstance() {
    return new Item$(Network.create(this.conf), this.namespace, this.cache)
  }
}
