/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { PaymentToken } from '@accelbyte/sdk/generated-public/platform/definitions/PaymentToken'
import { PaymentUrlCreate } from '@accelbyte/sdk/generated-public/platform/definitions/PaymentUrlCreate'
import { PaymentAccount$ } from '@accelbyte/sdk/generated-public/platform/PaymentAccount$'
import { PaymentStation$ } from '@accelbyte/sdk/generated-public/platform/PaymentStation$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class PaymentApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Get payment accounts.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=2 (READ)</li><li><i>Returns</i>: Payment account list</li></ul>
   */
  getPaymentAccounts = (userId: string) => {
    return this.newInstance().fetchUsersByUseridPaymentAccounts(userId)
  }

  /**
   * Delete payment account.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:PAYMENT:ACCOUNT", action=8 (DELETE)</li><li><i>Returns</i>:</li></ul>
   */
  deletePaymentAccount = ({ userId, type, id }: { userId: string; type: string; id: string }) => {
    return this.newInstance().deleteUsersByUseridPaymentAccountsByTypeById(userId, type, id)
  }

  /**
   * Get payment order info.<br>Other detail info: <ul><li><i>Returns</i>: Payment order details</li></ul>
   */
  getPaymentInfo = (paymentOrderNo: string) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentOrdersByPaymentordernoInfo(paymentOrderNo)
  }

  /**
   * Do payment(For now, this only support checkout.com).<br>Other detail info: <ul><li><i>Returns</i>: Payment process result</li></ul>
   */
  processPaymentOrder = (
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams?: { paymentProvider?: string | null; zipCode?: string | null }
  ) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).postPaymentOrdersByPaymentordernoPay(
      paymentOrderNo,
      data,
      queryParams
    )
  }

  /**
   * Get payment provider public config, at current only Strip provide public config.<br>Other detail info: <ul><li><i>Returns</i>: Public config</li></ul>
   */
  getPaymentProviderPublicConfig = (paymentProvider: string | null, region: string | null, sandbox?: boolean | null) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentPublicconfig({
      paymentProvider,
      region,
      sandbox
    })
  }

  /**
   * Check payment order paid status.<br>Other detail info: <ul><li><i>Returns</i>: Payment order paid result</li></ul>
   */
  getPaymentOrderStatus = (paymentOrderNo: string) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentOrdersByPaymentordernoStatus(
      paymentOrderNo
    )
  }

  /**
   * Get payment methods.<br>Other detail info: <ul><li><i>Returns</i>: Payment method list</li></ul>
   */
  getPaymentMethods = (paymentOrderNo: string | null) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentMethods({ paymentOrderNo })
  }

  /**
   * Check and get a payment order's should pay tax.<br>Other detail info: <ul><li><i>Returns</i>: tax result</li></ul>
   */
  getPaymentTax = (paymentProvider: string | null, paymentOrderNo: string | null, zipCode?: string | null) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentTax({
      paymentProvider,
      paymentOrderNo,
      zipCode
    })
  }

  /**
   * Get payment url.<br>Other detail info: <ul><li><i>Returns</i>: Get payment link</li></ul>
   */
  createPaymentUrl = (data: PaymentUrlCreate) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).postPaymentLink(data)
  }

  private newInstance() {
    return new PaymentAccount$(Network.create(this.conf), this.namespace, this.cache)
  }
}
