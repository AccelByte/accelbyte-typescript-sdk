/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { ItemInfo } from '@od-web-sdk/generated-public/platform/definitions/ItemInfo'
import { OrderCreate } from '@od-web-sdk/generated-public/platform/definitions/OrderCreate'
import { Order$ } from '@od-web-sdk/generated-public/platform/Order$'
import { Network } from '@od-web-sdk/utils/Network'
import { CurrencyApi } from './CurrencyApi'
import { EntitlementApi } from './EntitlementApi'
import { ItemApi } from './ItemApi'

export class OrderApi {
  // need to get updated response on order, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new Order$(Network.create(this.conf), this.namespace, this.cache)
  }

  getOrderList = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: { itemId?: string | null; status?: string | null; offset?: number; limit?: number }
  }) => {
    return this.newInstance().fetchUsersByUseridOrders(userId, queryParams)
  }

  getOrderByOrderNo = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().fetchUsersByUseridOrdersByOrderno(userId, orderNo)
  }

  cancelOrder = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().putUsersByUseridOrdersByOrdernoCancel(userId, orderNo)
  }

  createOrder = ({ userId, data }: { userId: string; data: OrderCreate }) => {
    return this.newInstance().postUsersByUseridOrders(userId, data)
  }

  fetchPrePurchaseInformation = async ({ namespace, userId, item }: { namespace: string; userId?: string | null; item: ItemInfo }) => {
    const currencyApi = new CurrencyApi(this.conf, namespace, this.cache)
    const itemApi = new ItemApi(this.conf, namespace, this.cache)
    const entitlementApi = new EntitlementApi(this.conf, namespace, this.cache)

    const [currencyMapResult, availableItemInfoResult, itemOwnershipResult, baseAppOwnershipResult, purchaseConditionValidationResult] =
      await Promise.all([
        currencyApi.getCurrencyMap(),
        itemApi.getItemByItemIdDynamic(item.itemId),
        userId && item.itemId
          ? entitlementApi.getEntitlementOwnerShip({
              userId,
              queryParams: {
                itemIds: [item.itemId].filter(Boolean) as string[]
              }
            })
          : null,

        userId && item.baseAppId
          ? entitlementApi.getEntitlementOwnerShip({
              userId,
              queryParams: {
                appIds: [item.baseAppId].filter(Boolean) as string[]
              }
            })
          : null,

        userId
          ? itemApi.validatePurchaseCondition({
              itemIds: [item.itemId]
            })
          : null
      ])
    return {
      currencyMapResult,
      availableItemInfoResult,
      itemOwnershipResult,
      baseAppOwnershipResult,
      purchaseConditionValidationResult
    }
  }
}
