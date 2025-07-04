/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PaymentDedicatedAdminApi } from '../PaymentDedicatedAdminApi.js'

import { ExternalPaymentOrderCreate } from '../../generated-definitions/ExternalPaymentOrderCreate.js'
import { PaymentOrderCreateResult } from '../../generated-definitions/PaymentOrderCreateResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'
import { PaymentOrderRefundResult } from '../../generated-definitions/PaymentOrderRefundResult.js'
import { PaymentOrderSyncResult } from '../../generated-definitions/PaymentOrderSyncResult.js'

export enum Key_PaymentDedicatedAdmin {
  PaymentOrders = 'Platform.PaymentDedicatedAdmin.PaymentOrders',
  PaymentOrder = 'Platform.PaymentDedicatedAdmin.PaymentOrder',
  RefundPayment_ByPaymentOrderNo = 'Platform.PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Sync payment orders. If response contains nextEvaluatedKey, please use it as query param in the next call to fetch the next batch, a batch has 1000 elements or less.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: sync payment orders&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentDedicatedAdmin.PaymentOrders, input]
 * }
 * ```
 */
export const usePaymentDedicatedAdminApi_GetPaymentOrders = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { end: string | null; start: string | null; nextEvaluatedKey?: string | null } },
  options?: Omit<UseQueryOptions<PaymentOrderSyncResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderSyncResult>) => void
): UseQueryResult<PaymentOrderSyncResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentDedicatedAdminApi_GetPaymentOrders>[1]) => async () => {
    const response = await PaymentDedicatedAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentOrders(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderSyncResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentDedicatedAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;p&gt;This API is used to create payment order from non justice service. e.g. from dedicated server, the result contains the payment station url.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Path Parameter:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Namespace that payment order resides in, should be publisher namespace if it&#39;s a Steam like platform that share &lt;br&gt;payment config cross namespaces, otherwise it&#39;s the game namespace&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;External order number, it should be unique in invoker order system&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sku&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Item identity&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetNamespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;The game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;User id for the order owner in game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;External user id, can be user character id &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;price&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;price which should be greater than 0&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;title&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Item title&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;description&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Item description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyCode&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Currency code, default is USD&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyNamespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Currency namespace, default is publisher namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Country of the user, will get from user info if not present&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;language&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Language of the user&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sandbox&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;set to true will create sandbox order that not real paid for xsolla/alipay and will not validate &lt;br&gt;price for wxpay.&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;returnUrl&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;customized return url for redirect once payment finished, leave unset to use configuration in &lt;br&gt;namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;notifyUrl&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;customized notify url for payment web hook, leave unset to use configuration in namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;customParameters&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Custom parameters&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Example:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;code style=&#39;overflow: auto&#39;&gt;{ &#34;extOrderNo&#34;: &#34;123456789&#34;, &#34;sku&#34;: &#34;sku&#34;, &#34;targetNamespace&#34;: &#34;game1&#34;, &#34;targetUserId&#34;: &#34;94451623768940d58416ca33ca767ec3&#34;, &#34;extUserId&#34;: &#34;678&#34;, &#34;title&#34;: &#34;Frostmourne&#34;, &#34;description\&#34;: &#34;Here was power. Here was despair&#34;, &#34;price&#34;: 100, &#34;region&#34;: &#34;CN&#34;, &#34;language&#34;: &#34;zh-CN&#34;, &#34;currencyCode&#34;: &#34;USD&#34;, &#34;currencyNamespace&#34;: &#34;accelbyte&#34; }&lt;/pre&gt;&lt;/code&gt;&lt;h4&gt;Payment Notification:&lt;/h4&gt;&lt;p&gt;After user complete the payment, it will send notification to configured web hook, http status code should return 200 or 204 once you resolve notification successfully, otherwise payment system will retry notification in interval&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Payment notification parameter:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;payload&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment notification payload in json string &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sign&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;sha1 hex signature for payload and private key&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Payment notification parameter Example:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;code style=&#39;overflow: auto&#39;&gt;{ &#34;payload&#34;: &#34;{ \&#34;type\&#34;: \&#34;payment\&#34;, \&#34;nonceStr\&#34;: \&#34;34c1dcf3eb58455eb161465bbfc0b590\&#34;, \&#34;paymentOrderNo\&#34;: \&#34;18081239088\&#34;, \&#34;namespace\&#34;: \&#34;accelbyte\&#34;, \&#34;targetNamespace\&#34;: \&#34;game1\&#34;, \&#34;targetUserId\&#34;: \&#34;94451623768940d58416ca33ca767ec3\&#34;, \&#34;extOrderNo\&#34;: \&#34;123456789\&#34;, \&#34;sku\&#34;: \&#34;sku\&#34;, \&#34;extUserId\&#34;: \&#34;678\&#34;, \&#34;price\&#34;: 100, \&#34;paymentProvider\&#34;: \&#34;XSOLLA\&#34;, \&#34;vat\&#34;: 0, \&#34;salesTax\&#34;: 0, \&#34;paymentProviderFee\&#34;: 0, \&#34;paymentMethodFee\&#34;: 0, \&#34;currency\&#34;: { \&#34;currencyCode\&#34;: \&#34;USD\&#34;, \&#34;currencySymbol\&#34;: \&#34;$\&#34;, \&#34;currencyType\&#34;: \&#34;REAL\&#34;, \&#34;namespace\&#34;: \&#34;accelbyte\&#34;, \&#34;decimals\&#34;: 2 }, \&#34;status\&#34;: \&#34;CHARGED\&#34;, \&#34;createdTime\&#34;: \&#34;2018-07-28T00:39:16.274Z\&#34;, \&#34;chargedTime\&#34;: \&#34;2018-07-28T00:39:16.274Z\&#34; }&#34;, &#34;sign&#34;:&#34;e31fb92516cc9faaf50ad70343e1293acec6f3d5&#34; }&lt;/pre&gt;&lt;/code&gt;&lt;p&gt;&lt;strong&gt;Payment notification payload parameter list:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;type&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Notification type: &#39;payment&#39;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment system generated order number&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;External order number that passed by invoker&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Namespace that related payment order resides in&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetNamespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;The game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;The user id in game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sku&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Item identify, it will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;External user id, can be character id, it will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;price&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Price of item&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentProvider&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment provider, allowed values: xsolla/alipay/wxpay/wallet&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;vat&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order VAT&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;salesTax&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order sales tax&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentProviderFee&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment provider fee&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentMethodFee&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment method fee&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currency&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order currency info&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;status&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order status&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;statusReason&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Payment order status reason&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;createdTime&lt;/td&gt;&lt;td&gt;Datetime&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;The time of the order created&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;chargedTime&lt;/td&gt;&lt;td&gt;Datetime&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;The time of the order charged&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;customParameters&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;custom parameters, will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;nonceStr&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Random string, max length is 32, can be timestamp or uuid&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Currency info parameter list:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyCode&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency Code&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencySymbol&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency Symbol&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyType&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency type(REAL/VIRTUAL)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;decimals&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency decimals&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;h4&gt;Encryption Rule:&lt;/h4&gt;&lt;p&gt;Concat payload json string and private key and then do sha1Hex.&lt;/p&gt;&lt;h4&gt;Other detail info:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;&lt;i&gt;Token type&lt;/i&gt;: client token&lt;/li&gt;&lt;li&gt;&lt;i&gt;Optional permission(user with this permission will create sandbox order)&lt;/i&gt;: resource=&#34;SANDBOX&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;It will be forbidden while the target user is banned: PAYMENT_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;&lt;b&gt;cross namespace allowed&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created payment order info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentDedicatedAdmin.PaymentOrder, input]
 * }
 * ```
 */
export const usePaymentDedicatedAdminApi_CreatePaymentOrderMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentOrderCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { data: ExternalPaymentOrderCreate }>,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderCreateResult) => void
): UseMutationResult<PaymentOrderCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { data: ExternalPaymentOrderCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ExternalPaymentOrderCreate }) => {
    const response = await PaymentDedicatedAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentOrder(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.PaymentOrder],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;&lt;p&gt;This API is used to refund payment order by paymentOrderNo from non justice service. e.g. dedicated server. &lt;ul&gt;&lt;li&gt;if the status field of response json is &#34;REFUNDED&#34;, usually wallet paid, it indicates payment order already refunded&lt;/li&gt;&lt;li&gt;if the status field of response json is &#34;REFUNDING&#34;, usually real money paid, platform will send notification to registered notify url once refund successfully&lt;/li&gt; &lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Path Parameter:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Namespace that payment order resides in&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order number&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;description&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Refund description&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Example:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;code style=&#39;overflow: auto&#39;&gt;{ &#34;description&#34;: &#34;Repeated item.&#34; }&lt;/pre&gt;&lt;/code&gt;&lt;h4&gt;Refund Notification:&lt;/h4&gt;&lt;p&gt;It will send notification to configured web hook after refund successfully, http status code should return 200 or 204 once you resolve notification successfully, otherwise payment system will retry notification in interval&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Refund notification parameter:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;payload&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Refund notification payload in json string &lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sign&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;sha1 hex signature for payload and private key&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Refund notification Example:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;code style=&#39;overflow: auto&#39;&gt;{ &#34;payload&#34;: &#34;{ \&#34;type\&#34;: \&#34;payment\&#34;, \&#34;nonceStr\&#34;: \&#34;34c1dcf3eb58455eb161465bbfc0b590\&#34;, \&#34;paymentOrderNo\&#34;: \&#34;18081239088\&#34;, \&#34;namespace\&#34;: \&#34;accelbyte\&#34;, \&#34;targetNamespace\&#34;: \&#34;game1\&#34;, \&#34;targetUserId\&#34;: \&#34;94451623768940d58416ca33ca767ec3\&#34;, \&#34;extOrderNo\&#34;: \&#34;123456789\&#34;, \&#34;sku\&#34;: \&#34;sku\&#34;, \&#34;extUserId\&#34;: \&#34;678\&#34;, \&#34;price\&#34;: 100, \&#34;paymentProvider\&#34;: \&#34;XSOLLA\&#34;, \&#34;vat\&#34;: 0, \&#34;salesTax\&#34;: 0, \&#34;paymentProviderFee\&#34;: 0, \&#34;paymentMethodFee\&#34;: 0, \&#34;currency\&#34;: { \&#34;currencyCode\&#34;: \&#34;USD\&#34;, \&#34;currencySymbol\&#34;: \&#34;$\&#34;, \&#34;currencyType\&#34;: \&#34;REAL\&#34;, \&#34;namespace\&#34;: \&#34;accelbyte\&#34;, \&#34;decimals\&#34;: 2 }, \&#34;status\&#34;: \&#34;REFUNDED\&#34;, \&#34;createdTime\&#34;: \&#34;2018-07-28T00:39:16.274Z\&#34;, \&#34;chargedTime\&#34;: \&#34;2018-07-28T00:39:16.274Z\&#34;, \&#34;refundedTime\&#34;: \&#34;2018-07-28T00:39:16.274Z\&#34; }&#34;, &#34;sign&#34;:&#34;e31fb92516cc9faaf50ad70343e1293acec6f3d5&#34; }&lt;/pre&gt;&lt;/code&gt;&lt;p&gt;&lt;strong&gt;Refund notification payload parameter list:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;type&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Notification type: &#39;payment&#39;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment system generated order number&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extOrderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;External order number that passed by invoker&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Namespace that related payment order resides in&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetNamespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;The game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;targetUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;The user id in game namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sku&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Item identify, it will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;extUserId&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;External user id, can be character id, it will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;price&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Price of item&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentProvider&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment provider: xsolla/alipay/wxpay/wallet&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;vat&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order VAT&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;salesTax&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order sales tax&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentProviderFee&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment provider fee&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentMethodFee&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment method fee&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currency&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order currency info&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;status&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Payment order status&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;statusReason&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;Payment order refund status reason&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;createdTime&lt;/td&gt;&lt;td&gt;Datetime&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;The time of the order created&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;chargedTime&lt;/td&gt;&lt;td&gt;Datetime&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;The time of the order charged&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;refundedTime&lt;/td&gt;&lt;td&gt;Datetime&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;The time of the order refunded&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;customParameters&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;custom parameters, will return if pass it when create payment&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;nonceStr&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Random string, max length is 32, &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;p&gt;&lt;strong&gt;Currency info parameter list:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyCode&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency Code&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencySymbol&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency Symbol&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;currencyType&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency type(REAL/VIRTUAL)&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;decimals&lt;/td&gt;&lt;td&gt;int&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;Currency decimals&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;h4&gt;Encryption Rule:&lt;/h4&gt;&lt;p&gt;Concat payload json string and private key and then do sha1Hex.&lt;/p&gt;&lt;h4&gt;Other detail info:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;&lt;i&gt;Token type&lt;/i&gt;: client token&lt;/li&gt;&lt;li&gt;&lt;b&gt;cross namespace allowed&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentDedicatedAdminApi_UpdateRefundPayment_ByPaymentOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentOrderRefundResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderRefund }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentOrderRefundResult) => void
): UseMutationResult<
  PaymentOrderRefundResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderRefund }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo: string; data: PaymentOrderRefund }) => {
    const response = await PaymentDedicatedAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRefundPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
