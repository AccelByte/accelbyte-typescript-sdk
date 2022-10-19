/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { PaymentAccount$ } from '@od-web-sdk/generated-public/platform/PaymentAccount$'
import { PaymentStation$ } from '@od-web-sdk/generated-public/platform/PaymentStation$'
import { Network } from '@od-web-sdk/utils/Network'

export class PaymentApi {
  // need to get updated response on payment, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new PaymentAccount$(Network.create(this.conf), this.namespace, this.cache)
  }

  getPaymentAccounts = (userId: string) => {
    return this.newInstance().fetchUsersByUseridPaymentAccounts(userId)
  }

  deletePaymentAccount = ({ userId, type, id }: { userId: string; type: string; id: string }) => {
    return this.newInstance().deleteUsersByUseridPaymentAccountsByTypeById(userId, type, id)
  }

  getPaymentInfo = (paymentOrderNo: string) => {
    return new PaymentStation$(Network.create(this.conf), this.namespace, this.cache).fetchPaymentOrdersByPaymentordernoInfo(paymentOrderNo)
  }
}
