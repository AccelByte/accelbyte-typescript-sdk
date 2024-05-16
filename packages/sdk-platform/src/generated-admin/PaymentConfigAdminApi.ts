/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AdyenConfig } from '../generated-definitions/AdyenConfig.js'
import { AliPayConfig } from '../generated-definitions/AliPayConfig.js'
import { CheckoutConfig } from '../generated-definitions/CheckoutConfig.js'
import { PayPalConfig } from '../generated-definitions/PayPalConfig.js'
import { PaymentConfigAdmin$ } from './endpoints/PaymentConfigAdmin$.js'
import { PaymentMerchantConfigInfo } from '../generated-definitions/PaymentMerchantConfigInfo.js'
import { PaymentProviderConfigEdit } from '../generated-definitions/PaymentProviderConfigEdit.js'
import { PaymentProviderConfigInfo } from '../generated-definitions/PaymentProviderConfigInfo.js'
import { PaymentProviderConfigPagingSlicedResult } from '../generated-definitions/PaymentProviderConfigPagingSlicedResult.js'
import { PaymentTaxConfigEdit } from '../generated-definitions/PaymentTaxConfigEdit.js'
import { PaymentTaxConfigInfo } from '../generated-definitions/PaymentTaxConfigInfo.js'
import { StripeConfig } from '../generated-definitions/StripeConfig.js'
import { TestResult } from '../generated-definitions/TestResult.js'
import { WxPayConfigRequest } from '../generated-definitions/WxPayConfigRequest.js'
import { XsollaConfig } from '../generated-definitions/XsollaConfig.js'
import { XsollaPaywallConfigRequest } from '../generated-definitions/XsollaPaywallConfigRequest.js'

export function PaymentConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment global tax config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigTax(): Promise<PaymentTaxConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigTax()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update payment tax config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarEnabled&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;required, when taxJarEnabled is true and there is no existing token&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sandboxTaxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;optional&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarProductCodesMapping&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;key is item type(APP|COINS|INGAMEITEM|BUNDLE|CODE|SUBSCRIPTION) and value is product tax code: https://developers.taxjar.com/api/reference/?ruby#get-list-tax-categories&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment global tax config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePaymentConfigTax(data: PaymentTaxConfigEdit): Promise<PaymentTaxConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updatePaymentConfigTax(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Query payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigProvider(queryParams?: {
    limit?: number
    namespace?: string | null
    offset?: number
    region?: string | null
  }): Promise<PaymentProviderConfigPagingSlicedResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigProvider(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Create payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigProvider(data: PaymentProviderConfigEdit): Promise<PaymentProviderConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigProvider(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get payment merchant config by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigMerchant_ById(id: string): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigMerchant_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Delete payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  async function deletePaymentConfigProvider_ById(id: string): Promise<unknown> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deletePaymentConfigProvider_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePaymentConfigProvider_ById(id: string, data: PaymentProviderConfigEdit): Promise<PaymentProviderConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updatePaymentConfigProvider_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Debug matched payment merchant config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigMerchantMatched(queryParams?: {
    namespace?: string | null
    region?: string | null
  }): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigMerchantMatched(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Debug matched payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigProviderMatched(queryParams?: {
    namespace?: string | null
    region?: string | null
  }): Promise<PaymentProviderConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigProviderMatched(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get special payment providers, such as ALIPAY, WXPAY.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigProviderSpecial(): Promise<unknown> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigProviderSpecial()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Get aggregate payment providers, such as XSOLLA, ADYEN.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaymentConfigProviderAggregate(): Promise<unknown> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaymentConfigProviderAggregate()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update adyen config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateAdyenconfigPayment_ById(
    id: string,
    data: AdyenConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateAdyenconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update wxpay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateWxpayconfigPayment_ById(
    id: string,
    data: WxPayConfigRequest,
    queryParams?: { validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateWxpayconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test adyen configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;li&gt;merchantAccount&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;notificationHmacKey&lt;/li&gt;&lt;li&gt;notificationUsername&lt;/li&gt;&lt;li&gt;notificationPassword&lt;/li&gt;&lt;li&gt;liveEndpointUrlPrefix&lt;/li&gt;&lt;li&gt;allowedPaymentMethods&lt;/li&gt;&lt;li&gt;blockedPaymentMethods&lt;/li&gt;&lt;li&gt;settings&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantAdyenconfigTest(
    data: AdyenConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantAdyenconfigTest(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test WxPay configuration. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantWxpayconfigTest(data: WxPayConfigRequest): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantWxpayconfigTest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update alipay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateAlipayconfigPayment_ById(
    id: string,
    data: AliPayConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateAlipayconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update PayPal config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updatePaypalconfigPayment_ById(
    id: string,
    data: PayPalConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updatePaypalconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update stripe config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateStripeconfigPayment_ById(
    id: string,
    data: StripeConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateStripeconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update xsolla configuration. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateXsollaconfigPayment_ById(
    id: string,
    data: XsollaConfig,
    queryParams?: { validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateXsollaconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test AliPay configuration.Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantAlipayconfigTest(
    data: AliPayConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantAlipayconfigTest(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test PayPal configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;clientID&lt;/li&gt;&lt;li&gt;clientSecret&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;webHookId&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantPaypalconfigTest(
    data: PayPalConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantPaypalconfigTest(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test stripe configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;li&gt;allowedPaymentMethodTypes&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;publishableKey&lt;/li&gt;&lt;li&gt;webhookSecret&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantStripeconfigTest(
    data: StripeConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantStripeconfigTest(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Check xsolla configuration, Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;merchantId&lt;/li&gt;&lt;li&gt;projectId&lt;/li&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;projectSecretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantXsollaconfigTest(data: XsollaConfig): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantXsollaconfigTest(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update checkout.com config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateCheckoutconfigPayment_ById(
    id: string,
    data: CheckoutConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateCheckoutconfigPayment_ById(id, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Update xsolla UI configuration.Reference: &lt;a href=&#34;https://developers.xsolla.com/api.html#ui-integrations&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateXsollauiconfigPayment_ById(id: string, data: XsollaPaywallConfigRequest): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateXsollauiconfigPayment_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test checkout.com configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;publicKey&lt;/li&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function createPaymentConfigMerchantCheckoutconfigTest(
    data: CheckoutConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createPaymentConfigMerchantCheckoutconfigTest(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test adyen configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAdyenconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAdyenconfigTestPayment_ById(id, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Upload wxpay cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  async function updateWxpayconfigCertPayment_ById(id: string, data: { file?: File }): Promise<PaymentMerchantConfigInfo> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateWxpayconfigCertPayment_ById(id, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test WxPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getWxpayconfigTestPayment_ById(id: string): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getWxpayconfigTestPayment_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test AliPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test alipay config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getAlipayconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAlipayconfigTestPayment_ById(id, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test PayPal configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPaypalconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPaypalconfigTestPayment_ById(id, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test stripe configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getStripeconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getStripeconfigTestPayment_ById(id, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test xsolla configuration in payment merchant config. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test xsolla config&lt;/li&gt;&lt;/ul&gt;
   */
  async function getXsollaconfigTestPayment_ById(id: string): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getXsollaconfigTestPayment_ById(id)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;b&gt;[Not Supported Yet In Starter]&lt;/b&gt;Test checkout.com configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  async function getCheckoutconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<TestResult> {
    const $ = new PaymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getCheckoutconfigTestPayment_ById(id, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPaymentConfigTax,
    updatePaymentConfigTax,
    getPaymentConfigProvider,
    createPaymentConfigProvider,
    getPaymentConfigMerchant_ById,
    deletePaymentConfigProvider_ById,
    updatePaymentConfigProvider_ById,
    getPaymentConfigMerchantMatched,
    getPaymentConfigProviderMatched,
    getPaymentConfigProviderSpecial,
    getPaymentConfigProviderAggregate,
    updateAdyenconfigPayment_ById,
    updateWxpayconfigPayment_ById,
    createPaymentConfigMerchantAdyenconfigTest,
    createPaymentConfigMerchantWxpayconfigTest,
    updateAlipayconfigPayment_ById,
    updatePaypalconfigPayment_ById,
    updateStripeconfigPayment_ById,
    updateXsollaconfigPayment_ById,
    createPaymentConfigMerchantAlipayconfigTest,
    createPaymentConfigMerchantPaypalconfigTest,
    createPaymentConfigMerchantStripeconfigTest,
    createPaymentConfigMerchantXsollaconfigTest,
    updateCheckoutconfigPayment_ById,
    updateXsollauiconfigPayment_ById,
    createPaymentConfigMerchantCheckoutconfigTest,
    getAdyenconfigTestPayment_ById,
    updateWxpayconfigCertPayment_ById,
    getWxpayconfigTestPayment_ById,
    getAlipayconfigTestPayment_ById,
    getPaypalconfigTestPayment_ById,
    getStripeconfigTestPayment_ById,
    getXsollaconfigTestPayment_ById,
    getCheckoutconfigTestPayment_ById
  }
}
