/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { ItemInfo } from '@accelbyte/sdk/generated-public/platform/definitions/ItemInfo'
import { OrderCreate } from '@accelbyte/sdk/generated-public/platform/definitions/OrderCreate'
import { Order$ } from '@accelbyte/sdk/generated-public/platform/Order$'
import { Network } from '@accelbyte/sdk/utils/Network'
import { CurrencyApi } from './CurrencyApi'
import { EntitlementApi } from './EntitlementApi'
import { ItemApi } from './ItemApi'

export class OrderApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Query user orders.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  getOrderList = ({ userId, queryParams }: { userId: string; queryParams?: Parameters<Order$['fetchUsersByUseridOrders']>[1] }) => {
    return this.newInstance().fetchUsersByUseridOrders(userId, queryParams)
  }

  /**
   * Get user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=2 (READ)</li><li><i>Returns</i>: get order</li></ul>
   */
  getOrderByOrderNo = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().fetchUsersByUseridOrdersByOrderno(userId, orderNo)
  }

  /**
   * Cancel user order.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=4 (UPDATE)</li><li><i>Returns</i>: cancelled order</li></ul>
   */
  cancelOrder = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().putUsersByUseridOrdersByOrdernoCancel(userId, orderNo)
  }

  /**
   * Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ORDER", action=1 (CREATE)</li><li><i>Optional permission(user with this permission will create sandbox order)</i>: resource="SANDBOX", action=1 (CREATE)</li><li>It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT</li><li><i>Returns</i>: created order</li></ul>
   */
  createOrder = ({ userId, data }: { userId: string; data: OrderCreate }) => {
    return this.newInstance().postUsersByUseridOrders(userId, data)
  }

  /**
   * Fetch all information needed for a user to check the user's availability to purchase the item
   */
  fetchPrePurchaseInformation = async ({ userId, item }: { userId?: string | null; item: ItemInfo }) => {
    const currencyApi = new CurrencyApi(this.conf, this.namespace, this.cache)
    const itemApi = new ItemApi(this.conf, this.namespace, this.cache)
    const entitlementApi = new EntitlementApi(this.conf, this.namespace, this.cache)

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

  private newInstance() {
    return new Order$(Network.create(this.conf), this.namespace, this.cache)
  }
}
