/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { NotificationProcessResult } from '../../generated-definitions/NotificationProcessResult.js'
import { PaymentNotificationPagingSlicedResult } from '../../generated-definitions/PaymentNotificationPagingSlicedResult.js'
import { PaymentOrderChargeRequest } from '../../generated-definitions/PaymentOrderChargeRequest.js'
import { PaymentOrderChargeStatus } from '../../generated-definitions/PaymentOrderChargeStatus.js'
import { PaymentOrderCreate } from '../../generated-definitions/PaymentOrderCreate.js'
import { PaymentOrderInfo } from '../../generated-definitions/PaymentOrderInfo.js'
import { PaymentOrderNotifySimulation } from '../../generated-definitions/PaymentOrderNotifySimulation.js'
import { PaymentOrderPagingSlicedResult } from '../../generated-definitions/PaymentOrderPagingSlicedResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'

export class PaymentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query payment orders&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentOrders(queryParams?: {
    channel?: 'EXTERNAL' | 'INTERNAL'
    extTxId?: string | null
    limit?: number
    offset?: number
    status?:
      | 'AUTHORISED'
      | 'AUTHORISE_FAILED'
      | 'CHARGEBACK'
      | 'CHARGEBACK_REVERSED'
      | 'CHARGED'
      | 'CHARGE_FAILED'
      | 'DELETED'
      | 'INIT'
      | 'NOTIFICATION_OF_CHARGEBACK'
      | 'REFUNDED'
      | 'REFUNDING'
      | 'REFUND_FAILED'
      | 'REQUEST_FOR_INFORMATION'
  }): Promise<Response<PaymentOrderPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentOrderPagingSlicedResult,
      'PaymentOrderPagingSlicedResult'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment notifications&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentNotifications(queryParams?: {
    endDate?: string | null
    externalId?: string | null
    limit?: number
    notificationSource?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    notificationType?: string | null
    offset?: number
    paymentOrderNo?: string | null
    startDate?: string | null
    status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
  }): Promise<Response<PaymentNotificationPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/notifications'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentNotificationPagingSlicedResult,
      'PaymentNotificationPagingSlicedResult'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;List external order No by external transaction id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment orders&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentOrdersByExtTxId(queryParams: { extTxId: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders/byExtTxId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to create payment order from justice service. The result contains the payment station url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;It will be forbidden while the user is banned: PAYMENT_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for custom parameters and meta data&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  createPaymentOrder_ByUserId(userId: string, data: PaymentOrderCreate): Promise<Response<PaymentOrderInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/payment/orders'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentOrderInfo, 'PaymentOrderInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order by paymentOrderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentOrder_ByPaymentOrderNo(paymentOrderNo: string): Promise<Response<PaymentOrderInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders/{paymentOrderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentOrderInfo, 'PaymentOrderInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Charge payment order without payment flow for unpaid payment order, usually for test usage to simulate real currency payment process.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaymentOrder_ByPaymentOrderNo(paymentOrderNo: string, data: PaymentOrderChargeRequest): Promise<Response<PaymentOrderInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders/{paymentOrderNo}'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentOrderInfo, 'PaymentOrderInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order charge status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order charge status&lt;/li&gt;&lt;/ul&gt;
   */
  getStatusPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<Response<PaymentOrderChargeStatus>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders/{paymentOrderNo}/status'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentOrderChargeStatus,
      'PaymentOrderChargeStatus'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Simulate payment notification on sandbox payment order, usually for test usage to simulate real currency payment notification.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: notification process result&lt;/li&gt;&lt;/ul&gt;
   */
  updateSimulateNotificationPayment_ByPaymentOrderNo(
    paymentOrderNo: string,
    data: PaymentOrderNotifySimulation
  ): Promise<Response<NotificationProcessResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/orders/{paymentOrderNo}/simulate-notification'
      .replace('{namespace}', this.namespace)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      NotificationProcessResult,
      'NotificationProcessResult'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to refund order by paymentOrderNo from justice service.
   */
  updateRefundPayment_ByUserId_ByPaymentOrderNo(
    userId: string,
    paymentOrderNo: string,
    data: PaymentOrderRefund
  ): Promise<Response<PaymentOrderInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/payment/orders/{paymentOrderNo}/refund'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{paymentOrderNo}', paymentOrderNo)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentOrderInfo, 'PaymentOrderInfo')
  }
}
