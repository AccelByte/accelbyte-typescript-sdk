/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
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
   * GET [/platform/public/namespaces/{namespace}/items/byAppId](api)
   *
   * This API is used to get item by appId
   *
   * Returns: the item with that appId
   */
  getItemByAppId = ({ ...queryParams }: { storeId?: string; appId: string; language?: string; region?: string }) => {
    return this.newInstance().fetchItemsByAppId(queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/{itemId}/dynamic](api)
   *
   * Get item dynamic data for a published item
   *
   * Returns: item dynamic data
   */
  getItemByItemIdDynamic = (itemId: string) => {
    return this.newInstance().fetchDynamic_ByItemId(itemId)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/byCriteria](api)
   */
  fetchItemsByCriteria = ({
    queryParams
  }: {
    queryParams?: Parameters<Item$['fetchItemsByCriteria']>[0]
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> => {
    return this.newInstance().fetchItemsByCriteria(queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/locale/byIds](api)
   *
   * This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.
   *
   * Returns: the list of items
   */
  getItemsByItemIds = ({ queryParams }: { queryParams: QueryParamsItemIds }) => {
    return this.newInstance().fetchItemsLocaleByIds(queryParams)
  }

  /**
   * @deprecated The naming implicates that there will be more than 1 result, but the result is only 1. Prefer to use `getItemByItemIdLocale` instead.
   *
   * GET [/platform/public/namespaces/{namespace}/items/{itemId}/locale](api)
   *
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.
   *
   * Returns: item data
   */
  getItemsByItemIdLocale = ({ itemId, queryParams }: { itemId: string; queryParams?: Parameters<Item$['fetchLocale_ByItemId']>[1] }) => {
    return this.newInstance().fetchLocale_ByItemId(itemId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/{itemId}/locale](api)
   *
   * This API is used to get an item in locale. If item not exist in specific region, default region item will return.
   *
   * Returns: item data
   */
  getItemByItemIdLocale = ({ itemId, queryParams }: { itemId: string; queryParams?: Parameters<Item$['fetchLocale_ByItemId']>[1] }) => {
    return this.newInstance().fetchLocale_ByItemId(itemId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/{itemId}/app/locale](api)
   *
   * This API is used to get an app in locale. If app not exist in specific region, default region app will return.
   *
   * Returns: app data
   */
  getAppInfoByItemId = ({ itemId, queryParams }: { itemId: string; queryParams?: QueryParams }) => {
    return this.newInstance().fetchAppLocale_ByItemId(itemId, queryParams)
  }

  /**
   * POST [/platform/public/namespaces/{namespace}/items/purchase/conditions/validate](api)
   *
   * This API is used to validate user item purchase condition
   */
  validatePurchaseCondition = (data: ItemPurchaseConditionValidateRequest) => {
    return this.newInstance().createItemPurchaseConditionValidate(data)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/items/bySku](api)
   *
   * This API is used to get Item Info by SKU
   */
  getItemDetailBySku = (data: { sku: string }, namespace?: string) => {
    return this.newInstance(namespace).fetchItemsBySku(data)
  }

  private newInstance(namespace?: string) {
    return new Item$(Network.create(this.conf), namespace || this.namespace, this.cache)
  }
}
