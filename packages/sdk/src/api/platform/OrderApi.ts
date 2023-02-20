/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/orders](api)
   *
   * Query user orders
   *
   * Returns a paginated list of `OrderInfo`:
   * <pre lang="json">{
  orderNo,
  paymentOrderNo,
  namespace,
  userId,
  itemId,
  sandbox,
  quantity,
  price,
  discountedPrice,
  creationOptions
  paymentProvider: ('WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL'),
  paymentMethod,
  tax,
  vat,
  salesTax,
  paymentProviderFee,
  paymentMethodFee
  currency: CurrencySummary,
  paymentStationUrl,
  itemSnapshot,
  region,
  language,
  status: (
    'INIT',
    'CHARGED',
    'CHARGEBACK',
    'CHARGEBACK_REVERSED',
    'FULFILLED',
    'FULFILL_FAILED',
    'REFUNDING',
    'REFUNDED',
    'REFUND_FAILED',
    'CLOSED',
    'DELETED'
  ),
  statusReason,
  createdTime,
  chargedTime,
  fulfilledTime,
  refundedTime,
  chargebackTime,
  chargebackReversedTime,
  expireTime,
  paymentRemainSeconds,
  ext,
  totalTax,
  totalPrice,
  subtotalPrice,
  createdAt,
  updatedAt
}</pre>
   */
  getOrderList = ({ userId, queryParams }: { userId: string; queryParams?: Parameters<Order$['fetchNsUsersByUseridOrders']>[1] }) => {
    return this.newInstance().fetchNsUsersByUseridOrders(userId, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}](api)
   *
   * Get user order.
   *
   * Returns: `OrderInfo`
   */
  getOrderByOrderNo = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().fetchNsUsersByUseridOrdersByOrderno(userId, orderNo)
  }

  /**
   * PUT [/platform/public/namespaces/{namespace}/users/{userId}/orders/{orderNo}/cancel](api)
   *
   * Cancel user order.
   *
   * Returns: cancelled `OrderInfo`
   */
  cancelOrder = ({ userId, orderNo }: { userId: string; orderNo: string }) => {
    return this.newInstance().putNsUsersByUseridOrdersByOrdernoCancel(userId, orderNo)
  }

  /**
   * POST [/platform/public/namespaces/{namespace}/users/{userId}/orders](api)
   *
   * Create an order. The result contains the checkout link and payment token.
   * User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.
   *
   * Returns: created `OrderInfo`
   */
  createOrder = ({ userId, data }: { userId: string; data: OrderCreate }) => {
    return this.newInstance().postNsUsersByUseridOrders(userId, data)
  }

  /**
   * Fetch all information needed for a user to check the user's availability to purchase the item
   *
   * @internal
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
