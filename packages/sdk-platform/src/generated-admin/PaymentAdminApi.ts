/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { NotificationProcessResult } from '../generated-definitions/NotificationProcessResult.js'
import { PaymentAdmin$ } from './endpoints/PaymentAdmin$.js'
import { PaymentNotificationPagingSlicedResult } from '../generated-definitions/PaymentNotificationPagingSlicedResult.js'
import { PaymentOrderChargeRequest } from '../generated-definitions/PaymentOrderChargeRequest.js'
import { PaymentOrderChargeStatus } from '../generated-definitions/PaymentOrderChargeStatus.js'
import { PaymentOrderCreate } from '../generated-definitions/PaymentOrderCreate.js'
import { PaymentOrderInfo } from '../generated-definitions/PaymentOrderInfo.js'
import { PaymentOrderNotifySimulation } from '../generated-definitions/PaymentOrderNotifySimulation.js'
import { PaymentOrderPagingSlicedResult } from '../generated-definitions/PaymentOrderPagingSlicedResult.js'
import { PaymentOrderRefund } from '../generated-definitions/PaymentOrderRefund.js'

export function PaymentAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Query payment orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query payment orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentOrders(queryParams?: {
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
  }): Promise<PaymentOrderPagingSlicedResult> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getPaymentOrders(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Query payment notifications.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT:NOTIFICATION&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment notifications&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentNotifications(queryParams?: {
    endDate?: string | null
    externalId?: string | null
    limit?: number
    notificationSource?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
    notificationType?: string | null
    offset?: number
    paymentOrderNo?: string | null
    startDate?: string | null
    status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'
  }): Promise<PaymentNotificationPagingSlicedResult> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getPaymentNotifications(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;List external order No by external transaction id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment orders&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentOrdersByExtTxId(queryParams: { extTxId: string | null }): Promise<unknown> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getPaymentOrdersByExtTxId(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to create payment order from justice service. The result contains the payment station url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PAYMENT&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the user is banned: PAYMENT_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for custom parameters and meta data&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt;
   */
  async function createPaymentOrder_ByUserId(userId: string, data: PaymentOrderCreate): Promise<PaymentOrderInfo> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.createPaymentOrder_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment order by paymentOrderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentOrder_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderInfo> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getPaymentOrder_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Charge payment order without payment flow for unpaid payment order, usually for test usage to simulate real currency payment process.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order instance&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePaymentOrder_ByPaymentOrderNo(paymentOrderNo: string, data: PaymentOrderChargeRequest): Promise<PaymentOrderInfo> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updatePaymentOrder_ByPaymentOrderNo(paymentOrderNo, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment order charge status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment order charge status&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStatusPayment_ByPaymentOrderNo(paymentOrderNo: string): Promise<PaymentOrderChargeStatus> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getStatusPayment_ByPaymentOrderNo(paymentOrderNo)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;&lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; Simulate payment notification on sandbox payment order, usually for test usage to simulate real currency payment notification.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:PAYMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: notification process result&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateSimulateNotificationPayment_ByPaymentOrderNo(
    paymentOrderNo: string,
    data: PaymentOrderNotifySimulation
  ): Promise<NotificationProcessResult> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateSimulateNotificationPayment_ByPaymentOrderNo(paymentOrderNo, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;&lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used to refund order by paymentOrderNo from justice service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:PAYMENT&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateRefundPayment_ByUserId_ByPaymentOrderNo(
    userId: string,
    paymentOrderNo: string,
    data: PaymentOrderRefund
  ): Promise<PaymentOrderInfo> {
    const $ = new PaymentAdmin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateRefundPayment_ByUserId_ByPaymentOrderNo(userId, paymentOrderNo, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentOrders,
    getPaymentNotifications,
    getPaymentOrdersByExtTxId,
    createPaymentOrder_ByUserId,
    getPaymentOrder_ByPaymentOrderNo,
    updatePaymentOrder_ByPaymentOrderNo,
    getStatusPayment_ByPaymentOrderNo,
    updateSimulateNotificationPayment_ByPaymentOrderNo,
    updateRefundPayment_ByUserId_ByPaymentOrderNo
  }
}
