/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * This API is used to get item by appId.
   * Returns: the item with that appId
   */
  getItemByAppId({ ...queryParams }: { storeId?: string; appId: string; language?: string; region?: string }) {
    return this.newInstance().fetchNsItemsByAppId(queryParams)
  }

  /**
   * Get item dynamic data for a published item.
   * Returns: item dynamic data
   */
  getItemByItemIdDynamic(itemId: string) {
    return this.newInstance().fetchNsItemsByItemidDynamic(itemId)
  }

  fetchItemsByCriteria({
    queryParams
  }: {
    queryParams?: Parameters<Item$['fetchNsItemsByCriteria']>[0]
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    return this.newInstance().fetchNsItemsByCriteria(queryParams)
  }

  /**
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.
   * Returns: the list of items
   */
  getItemsByItemIds({ queryParams }: { queryParams: QueryParamsItemIds }) {
    return this.newInstance().fetchNsItemsLocaleByIds(queryParams)
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
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.
   * Returns: item data
   */
  getItemsByItemIdLocale({ itemId, queryParams }: { itemId: string; queryParams?: Parameters<Item$['fetchNsItemsByItemidLocale']>[1] }) {
    return this.newInstance().fetchNsItemsByItemidLocale(itemId, queryParams)
  }

  /**
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.
   * Returns: app data
   */
  getAppInfoByItemId({ itemId, queryParams }: { itemId: string; queryParams?: QueryParams }) {
    return this.newInstance().fetchNsItemsByItemidAppLocale(itemId, queryParams)
  }

  /**
   * This API is used to validate user item purchase condition
   */
  validatePurchaseCondition(data: ItemPurchaseConditionValidateRequest) {
    return this.newInstance().postNsItemsPurchaseConditionsValidate(data)
  }

  private newInstance() {
    return new Item$(Network.create(this.conf), this.namespace, this.cache)
  }
}
