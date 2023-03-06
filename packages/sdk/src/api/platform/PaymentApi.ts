/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts](api)
   *
   * Get payment accounts.
   *
   * Returns: Payment account list `PaymentAccountArray`
   */
  getPaymentAccounts = (userId: string) => {
    return this.newInstance().fetchPaymentAccounts_ByUserId(userId)
  }

  /**
   * DELETE [/platform/public/namespaces/{namespace}/users/{userId}/payment/accounts/{type}/{id}](api)
   *
   * Delete payment account.
   */
  deletePaymentAccount = ({ userId, type, id }: { userId: string; type: string; id: string }) => {
    return this.newInstance().deletePaymentAccount_ByUserId_ByType_ById(userId, type, id)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/info](api)
   *
   * Get payment order info.
   *
   * Returns: Payment order details `PaymentOrderDetails`
   */
  getPaymentInfo = (paymentOrderNo: string) => {
    return this.newPSInstance().fetchInfoPayment_ByPaymentOrderNo(paymentOrderNo)
  }

  /**
   * POST [/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/pay](api)
   *
   * Do payment(For now, this only support checkout.com).
   *
   * Returns: Payment process result
   */
  processPaymentOrder = (
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams: Parameters<PaymentStation$['createPayPayment_ByPaymentOrderNo']>[2]
  ) => {
    return this.newPSInstance().createPayPayment_ByPaymentOrderNo(paymentOrderNo, data, queryParams)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/payment/publicconfig](api)
   *
   * Get payment provider public config, at current only Strip provide public config.
   *
   * Returns: Public config
   */
  getPaymentProviderPublicConfig = (
    paymentProvider: Parameters<PaymentStation$['fetchPaymentPublicconfig']>[0]['paymentProvider'],
    region: string | null,
    sandbox?: boolean | null
  ) => {
    return this.newPSInstance().fetchPaymentPublicconfig({
      paymentProvider,
      region,
      sandbox
    })
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/payment/orders/{paymentOrderNo}/status](api)
   *
   * Check payment order paid status.
   *
   * Returns: Payment order paid result
   */
  getPaymentOrderStatus = (paymentOrderNo: string) => {
    return this.newPSInstance().fetchStatusPayment_ByPaymentOrderNo(paymentOrderNo)
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/payment/methods](api)
   *
   * Get payment methods.
   * Returns: Payment method list
   */
  getPaymentMethods = (paymentOrderNo: string | null) => {
    return this.newPSInstance().fetchPaymentMethods({ paymentOrderNo })
  }

  /**
   * GET [/platform/public/namespaces/{namespace}/payment/methods](api)
   *
   * Check and get a payment order's should pay tax.
   *
   * Returns: tax result
   */
  getPaymentTax = (
    paymentProvider: Parameters<PaymentStation$['fetchPaymentTax']>[0]['paymentProvider'],
    paymentOrderNo: string | null,
    zipCode?: string | null
  ) => {
    return this.newPSInstance().fetchPaymentTax({
      paymentProvider,
      paymentOrderNo,
      zipCode
    })
  }

  /**
   * POST [/platform/public/namespaces/{namespace}/payment/link](api)
   *
   * Get payment url.
   *
   * Returns: Get payment link
   */
  createPaymentUrl = (data: PaymentUrlCreate) => {
    return this.newPSInstance().createPaymentLink(data)
  }

  private newInstance() {
    return new PaymentAccount$(Network.create(this.conf), this.namespace, this.cache)
  }

  private newPSInstance() {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache)
  }
}
