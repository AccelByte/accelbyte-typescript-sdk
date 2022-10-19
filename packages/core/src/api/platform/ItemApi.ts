/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { ItemInfo } from '@od-web-sdk/generated-public/platform/definitions/ItemInfo'
import { ItemPagingSlicedResult } from '@od-web-sdk/generated-public/platform/definitions/ItemPagingSlicedResult'
import { ItemPurchaseConditionValidateRequest } from '@od-web-sdk/generated-public/platform/definitions/ItemPurchaseConditionValidateRequest'
import { Item$ } from '@od-web-sdk/generated-public/platform/Item$'
import { Network } from '@od-web-sdk/utils/Network'
import { IResponseWithSync } from '@od-web-sdk/utils/Validate'

type QueryParams = { storeId?: string | null; region?: string | null; language?: string | null }
type QueryParamsItemIds = { storeId?: string | null; region?: string | null; language?: string | null; itemIds: string | null }

export class ItemApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Item$(Network.create(this.conf), this.namespace, this.cache)
  }

  getItemByAppId({ ...queryParams }: { storeId?: string; appId: string; language?: string; region?: string }) {
    return this.newInstance().fetchItemsByAppId(queryParams)
  }

  getItemByItemIdDynamic(itemId: string) {
    return this.newInstance().fetchItemsByItemidDynamic(itemId)
  }

  fetchItemsByCriteria({
    queryParams
  }: {
    queryParams?: any // TODO Parameters<typeof Item$.fetchItemsByCriteria>[2]
  }): Promise<IResponseWithSync<ItemPagingSlicedResult>> {
    return this.newInstance().fetchItemsByCriteria(queryParams)
  }

  getItemsByItemIds({ queryParams }: { queryParams?: QueryParamsItemIds }) {
    return this.newInstance().fetchItemsLocaleByIds(queryParams)
  }

  async fetchAvailableItemInfoMap({ queryParams }: { queryParams?: QueryParamsItemIds }) {
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

  getItemsByItemIdLocale({
    itemId,
    queryParams
  }: {
    itemId: string
    queryParams?: {
      storeId?: string | null
      region?: string | null
      language?: string | null
      populateBundle?: boolean | null
    }
  }) {
    return this.newInstance().fetchItemsByItemidLocale(itemId, queryParams)
  }

  getAppInfoByItemId({ itemId, queryParams }: { itemId: string; queryParams?: QueryParams }) {
    return this.newInstance().fetchItemsByItemidAppLocale(itemId, queryParams)
  }

  validatePurchaseCondition(data: ItemPurchaseConditionValidateRequest) {
    return this.newInstance().postItemsPurchaseConditionsValidate(data)
  }
}
