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
   * Get payment accounts.\
   * Returns: Payment account list
   */
  getPaymentAccounts = (userId: string) => {
    return this.newInstance().fetchNsUsersByUseridPaymentAccounts(userId)
  }

  /**
   * Delete payment account.
   *
   * Other detail info:
   */
  deletePaymentAccount = ({ userId, type, id }: { userId: string; type: string; id: string }) => {
    return this.newInstance().deleteNsUsersByUseridPaymentAccountsByTypeById(userId, type, id)
  }

  /**
   * Get payment order info.
   * Returns: Payment order details
   */
  getPaymentInfo = (paymentOrderNo: string) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchNsPaymentOrdersByPaymentordernoInfo(
      paymentOrderNo
    )
  }

  /**
   * Do payment(For now, this only support checkout.com).
   * Returns: Payment process result
   */
  processPaymentOrder = (
    paymentOrderNo: string,
    data: PaymentToken,
    queryParams: Parameters<PaymentStation$['postNsPaymentOrdersByPaymentordernoPay']>[2]
  ) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).postNsPaymentOrdersByPaymentordernoPay(
      paymentOrderNo,
      data,
      queryParams
    )
  }

  /**
   * Get payment provider public config, at current only Strip provide public config.
   * Returns: Public config
   */
  getPaymentProviderPublicConfig = (
    paymentProvider: Parameters<PaymentStation$['fetchNsPaymentPublicconfig']>[0]['paymentProvider'],
    region: string | null,
    sandbox?: boolean | null
  ) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchNsPaymentPublicconfig({
      paymentProvider,
      region,
      sandbox
    })
  }

  /**
   * Check payment order paid status.
   * Returns: Payment order paid result
   */
  getPaymentOrderStatus = (paymentOrderNo: string) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchNsPaymentOrdersByPaymentordernoStatus(
      paymentOrderNo
    )
  }

  /**
   * Get payment methods.
   * Returns: Payment method list
   */
  getPaymentMethods = (paymentOrderNo: string | null) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchNsPaymentMethods({ paymentOrderNo })
  }

  /**
   * Check and get a payment order's should pay tax.
   * Returns: tax result
   */
  getPaymentTax = (
    paymentProvider: Parameters<PaymentStation$['fetchNsPaymentTax']>[0]['paymentProvider'],
    paymentOrderNo: string | null,
    zipCode?: string | null
  ) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchNsPaymentTax({
      paymentProvider,
      paymentOrderNo,
      zipCode
    })
  }

  /**
   * Get payment url.
   * Returns: Get payment link
   */
  createPaymentUrl = (data: PaymentUrlCreate) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).postNsPaymentLink(data)
  }

  private newInstance() {
    return new PaymentAccount$(Network.create(this.conf), this.namespace, this.cache)
  }
}
