/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AdyenConfig } from '../../generated-definitions/AdyenConfig.js'
import { AliPayConfig } from '../../generated-definitions/AliPayConfig.js'
import { CheckoutConfig } from '../../generated-definitions/CheckoutConfig.js'
import { NeonPayConfig } from '../../generated-definitions/NeonPayConfig.js'
import { PayPalConfig } from '../../generated-definitions/PayPalConfig.js'
import { PaymentDomainWhitelistConfigEdit } from '../../generated-definitions/PaymentDomainWhitelistConfigEdit.js'
import { PaymentDomainWhitelistConfigInfo } from '../../generated-definitions/PaymentDomainWhitelistConfigInfo.js'
import { PaymentMerchantConfigInfo } from '../../generated-definitions/PaymentMerchantConfigInfo.js'
import { PaymentProviderConfigEdit } from '../../generated-definitions/PaymentProviderConfigEdit.js'
import { PaymentProviderConfigInfo } from '../../generated-definitions/PaymentProviderConfigInfo.js'
import { PaymentProviderConfigPagingSlicedResult } from '../../generated-definitions/PaymentProviderConfigPagingSlicedResult.js'
import { PaymentTaxConfigEdit } from '../../generated-definitions/PaymentTaxConfigEdit.js'
import { PaymentTaxConfigInfo } from '../../generated-definitions/PaymentTaxConfigInfo.js'
import { StripeConfig } from '../../generated-definitions/StripeConfig.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { WxPayConfigRequest } from '../../generated-definitions/WxPayConfigRequest.js'
import { XsollaConfig } from '../../generated-definitions/XsollaConfig.js'
import { XsollaPaywallConfigRequest } from '../../generated-definitions/XsollaPaywallConfigRequest.js'

export class PaymentConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment global tax config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigTax(): Promise<Response<PaymentTaxConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/tax'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentTaxConfigInfo, 'PaymentTaxConfigInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment tax config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarEnabled&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;required, when taxJarEnabled is true and there is no existing token&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sandboxTaxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;optional&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarProductCodesMapping&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;key is item type(APP|COINS|INGAMEITEM|BUNDLE|CODE|SUBSCRIPTION) and value is product tax code: https://developers.taxjar.com/api/reference/?ruby#get-list-tax-categories&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment global tax config&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaymentConfigTax(data: PaymentTaxConfigEdit): Promise<Response<PaymentTaxConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/tax'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PaymentTaxConfigInfo, 'PaymentTaxConfigInfo')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config list&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigProvider(queryParams?: {
    limit?: number
    namespace?: string | null
    offset?: number
    region?: string | null
  }): Promise<Response<PaymentProviderConfigPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentProviderConfigPagingSlicedResult,
      'PaymentProviderConfigPagingSlicedResult'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Create payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigProvider(data: PaymentProviderConfigEdit): Promise<Response<PaymentProviderConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentProviderConfigInfo,
      'PaymentProviderConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment merchant config by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigMerchant_ById(id: string): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  deletePaymentConfigProvider_ById(id: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaymentConfigProvider_ById(id: string, data: PaymentProviderConfigEdit): Promise<Response<PaymentProviderConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider/{id}'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentProviderConfigInfo,
      'PaymentProviderConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Debug matched payment merchant config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigMerchantMatched(queryParams?: {
    namespace?: string | null
    region?: string | null
  }): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { namespace: '*', region: '*', ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/matched'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Debug matched payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigProviderMatched(queryParams?: {
    namespace?: string | null
    region?: string | null
  }): Promise<Response<PaymentProviderConfigInfo>> {
    const params = { namespace: '*', region: '*', ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider/matched'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentProviderConfigInfo,
      'PaymentProviderConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get special payment providers, such as ALIPAY, WXPAY.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigProviderSpecial(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider/special'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get aggregate payment providers, such as XSOLLA, ADYEN.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigProviderAggregate(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/provider/aggregate'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update adyen config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateAdyenconfigPayment_ById(
    id: string,
    data: AdyenConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/adyenconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update wxpay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateWxpayconfigPayment_ById(
    id: string,
    data: WxPayConfigRequest,
    queryParams?: { validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/wxpayconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test adyen configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;li&gt;merchantAccount&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;notificationHmacKey&lt;/li&gt;&lt;li&gt;notificationUsername&lt;/li&gt;&lt;li&gt;notificationPassword&lt;/li&gt;&lt;li&gt;liveEndpointUrlPrefix&lt;/li&gt;&lt;li&gt;allowedPaymentMethods&lt;/li&gt;&lt;li&gt;blockedPaymentMethods&lt;/li&gt;&lt;li&gt;settings&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantAdyenconfigTest(data: AdyenConfig, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/adyenconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test WxPay configuration. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantWxpayconfigTest(data: WxPayConfigRequest): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/wxpayconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update alipay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateAlipayconfigPayment_ById(
    id: string,
    data: AliPayConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/alipayconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update PayPal config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaypalconfigPayment_ById(
    id: string,
    data: PayPalConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/paypalconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update stripe config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateStripeconfigPayment_ById(
    id: string,
    data: StripeConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/stripeconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update xsolla configuration. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateXsollaconfigPayment_ById(
    id: string,
    data: XsollaConfig,
    queryParams?: { validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/xsollaconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test AliPay configuration.Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantAlipayconfigTest(
    data: AliPayConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/alipayconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test PayPal configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;clientID&lt;/li&gt;&lt;li&gt;clientSecret&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;webHookId&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantPaypalconfigTest(
    data: PayPalConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/paypalconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test stripe configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;li&gt;allowedPaymentMethodTypes&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;publishableKey&lt;/li&gt;&lt;li&gt;webhookSecret&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantStripeconfigTest(
    data: StripeConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/stripeconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check xsolla configuration, Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;merchantId&lt;/li&gt;&lt;li&gt;projectId&lt;/li&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;projectSecretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantXsollaconfigTest(data: XsollaConfig): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/xsollaconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update Neon Pay config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateNeonpayconfigPayment_ById(
    id: string,
    data: NeonPayConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/neonpayconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check Neon Pay configuration, Reference: &lt;a href=&#34;https://docs.neonpay.com/docs/checkout&#34;&gt;Neon Pay Document&lt;/a&gt;.&lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;li&gt;webhookSecretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantNeonpayconfigTest(
    data: NeonPayConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/neonpayconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update checkout.com config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateCheckoutconfigPayment_ById(
    id: string,
    data: CheckoutConfig,
    queryParams?: { sandbox?: boolean | null; validate?: boolean | null }
  ): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/checkoutconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update xsolla UI configuration.Reference: &lt;a href=&#34;https://developers.xsolla.com/api.html#ui-integrations&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateXsollauiconfigPayment_ById(id: string, data: XsollaPaywallConfigRequest): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/xsollauiconfig'.replace('{id}', id)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test checkout.com configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;publicKey&lt;/li&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  createPaymentConfigMerchantCheckoutconfigTest(
    data: CheckoutConfig,
    queryParams?: { sandbox?: boolean | null }
  ): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/checkoutconfig/test'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment domain whitelist config by namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment domain whitelist config info&lt;/li&gt;&lt;/ul&gt;
   */
  getPaymentConfigDomains(): Promise<Response<PaymentDomainWhitelistConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/config/domains'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentDomainWhitelistConfigInfo,
      'PaymentDomainWhitelistConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment provider config by namespace.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;domains&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;list of domains to whitelist for the return URL.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Validation&lt;/i&gt;: the domain should include the protocol (http/https), but the whitelist check will only compare the host part (www.example.com)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment domain whitelist config&lt;/li&gt;&lt;/ul&gt;
   */
  updatePaymentConfigDomain(data: PaymentDomainWhitelistConfigEdit): Promise<Response<PaymentDomainWhitelistConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/payment/config/domains'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentDomainWhitelistConfigInfo,
      'PaymentDomainWhitelistConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test adyen configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  getAdyenconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/adyenconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Upload wxpay cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
   */
  updateWxpayconfigCertPayment_ById(id: string, data: { file?: File }): Promise<Response<PaymentMerchantConfigInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/wxpayconfig/cert'.replace('{id}', id)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaymentMerchantConfigInfo,
      'PaymentMerchantConfigInfo'
    )
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test WxPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
   */
  getWxpayconfigTestPayment_ById(id: string): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/wxpayconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test AliPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test alipay config&lt;/li&gt;&lt;/ul&gt;
   */
  getAlipayconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/alipayconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test PayPal configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  getPaypalconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/paypalconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test stripe configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
   */
  getStripeconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/stripeconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test xsolla configuration in payment merchant config. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test xsolla config&lt;/li&gt;&lt;/ul&gt;
   */
  getXsollaconfigTestPayment_ById(id: string): Promise<Response<TestResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/xsollaconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test Neon Pay configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  getNeonpayconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/neonpayconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test checkout.com configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
   */
  getCheckoutconfigTestPayment_ById(id: string, queryParams?: { sandbox?: boolean | null }): Promise<Response<TestResult>> {
    const params = { sandbox: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/payment/config/merchant/{id}/checkoutconfig/test'.replace('{id}', id)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TestResult, 'TestResult')
  }
}
