/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { PaymentConfigAdminApi } from '../PaymentConfigAdminApi.js'

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

export enum Key_PaymentConfigAdmin {
  PaymentConfigTax = 'Platform.PaymentConfigAdmin.PaymentConfigTax',
  PaymentConfigProvider = 'Platform.PaymentConfigAdmin.PaymentConfigProvider',
  PaymentConfigMerchant_ById = 'Platform.PaymentConfigAdmin.PaymentConfigMerchant_ById',
  PaymentConfigProvider_ById = 'Platform.PaymentConfigAdmin.PaymentConfigProvider_ById',
  PaymentConfigMerchantMatched = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantMatched',
  PaymentConfigProviderMatched = 'Platform.PaymentConfigAdmin.PaymentConfigProviderMatched',
  PaymentConfigProviderSpecial = 'Platform.PaymentConfigAdmin.PaymentConfigProviderSpecial',
  PaymentConfigProviderAggregate = 'Platform.PaymentConfigAdmin.PaymentConfigProviderAggregate',
  AdyenconfigPayment_ById = 'Platform.PaymentConfigAdmin.AdyenconfigPayment_ById',
  WxpayconfigPayment_ById = 'Platform.PaymentConfigAdmin.WxpayconfigPayment_ById',
  PaymentConfigMerchantAdyenconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantAdyenconfigTest',
  PaymentConfigMerchantWxpayconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantWxpayconfigTest',
  AlipayconfigPayment_ById = 'Platform.PaymentConfigAdmin.AlipayconfigPayment_ById',
  PaypalconfigPayment_ById = 'Platform.PaymentConfigAdmin.PaypalconfigPayment_ById',
  StripeconfigPayment_ById = 'Platform.PaymentConfigAdmin.StripeconfigPayment_ById',
  XsollaconfigPayment_ById = 'Platform.PaymentConfigAdmin.XsollaconfigPayment_ById',
  PaymentConfigMerchantAlipayconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantAlipayconfigTest',
  PaymentConfigMerchantPaypalconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantPaypalconfigTest',
  PaymentConfigMerchantStripeconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantStripeconfigTest',
  PaymentConfigMerchantXsollaconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantXsollaconfigTest',
  NeonpayconfigPayment_ById = 'Platform.PaymentConfigAdmin.NeonpayconfigPayment_ById',
  PaymentConfigMerchantNeonpayconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantNeonpayconfigTest',
  CheckoutconfigPayment_ById = 'Platform.PaymentConfigAdmin.CheckoutconfigPayment_ById',
  XsollauiconfigPayment_ById = 'Platform.PaymentConfigAdmin.XsollauiconfigPayment_ById',
  PaymentConfigMerchantCheckoutconfigTest = 'Platform.PaymentConfigAdmin.PaymentConfigMerchantCheckoutconfigTest',
  PaymentConfigDomains = 'Platform.PaymentConfigAdmin.PaymentConfigDomains',
  PaymentConfigDomain = 'Platform.PaymentConfigAdmin.PaymentConfigDomain',
  AdyenconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.AdyenconfigTestPayment_ById',
  WxpayconfigCertPayment_ById = 'Platform.PaymentConfigAdmin.WxpayconfigCertPayment_ById',
  WxpayconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.WxpayconfigTestPayment_ById',
  AlipayconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.AlipayconfigTestPayment_ById',
  PaypalconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.PaypalconfigTestPayment_ById',
  StripeconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.StripeconfigTestPayment_ById',
  XsollaconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.XsollaconfigTestPayment_ById',
  NeonpayconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.NeonpayconfigTestPayment_ById',
  CheckoutconfigTestPayment_ById = 'Platform.PaymentConfigAdmin.CheckoutconfigTestPayment_ById'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment global tax config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigTax, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigTax = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PaymentTaxConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentTaxConfigInfo>) => void
): UseQueryResult<PaymentTaxConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigTax>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentConfigTax()
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentTaxConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigTax, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment tax config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarEnabled&lt;/td&gt;&lt;td&gt;Boolean&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;required, when taxJarEnabled is true and there is no existing token&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;sandboxTaxJarApiToken&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;false&lt;/td&gt;&lt;td&gt;optional&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;taxJarProductCodesMapping&lt;/td&gt;&lt;td&gt;Map&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;key is item type(APP|COINS|INGAMEITEM|BUNDLE|CODE|SUBSCRIPTION) and value is product tax code: https://developers.taxjar.com/api/reference/?ruby#get-list-tax-categories&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment global tax config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigTax, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdatePaymentConfigTaxMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentTaxConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentTaxConfigEdit }>,
    'mutationKey'
  >,
  callback?: (data: PaymentTaxConfigInfo) => void
): UseMutationResult<PaymentTaxConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentTaxConfigEdit }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentTaxConfigEdit }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaymentConfigTax(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigTax],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Query payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigProvider = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; namespace?: string | null; offset?: number; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentProviderConfigPagingSlicedResult>) => void
): UseQueryResult<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigProvider>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentConfigProvider(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Create payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigProviderMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentProviderConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentProviderConfigEdit }>,
    'mutationKey'
  >,
  callback?: (data: PaymentProviderConfigInfo) => void
): UseMutationResult<PaymentProviderConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentProviderConfigEdit }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentProviderConfigEdit }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigProvider(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment merchant config by id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchant_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigMerchant_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string },
  options?: Omit<UseQueryOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentMerchantConfigInfo>) => void
): UseQueryResult<PaymentMerchantConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigMerchant_ById>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentConfigMerchant_ById(input.id)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentMerchantConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchant_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_DeletePaymentConfigProvider_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePaymentConfigProvider_ById(input.id)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment provider config.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;namespace&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;namespace, * indicates all namespace&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;region&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;region, * indicates all regions&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;aggregate&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;aggregate payment provider, such as XSOLLA, ADYEN, STRIPE&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;specials&lt;/td&gt;&lt;td&gt;List&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;special payment provider, such as ALIPAY, WXPAY&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;payment provider applied has priority: &lt;ol&gt;&lt;li&gt;namespace and region match&lt;/li&gt;&lt;li&gt;namespace matches and region is *&lt;/li&gt;&lt;li&gt;region matches and namespace is *&lt;/li&gt;&lt;li&gt;namespace and region are *&lt;/li&gt;&lt;/ol&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdatePaymentConfigProvider_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentProviderConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: PaymentProviderConfigEdit }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentProviderConfigInfo) => void
): UseMutationResult<
  PaymentProviderConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: PaymentProviderConfigEdit }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: PaymentProviderConfigEdit }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaymentConfigProvider_ById(input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Debug matched payment merchant config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment merchant config info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantMatched, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigMerchantMatched = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { namespace?: string | null; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentMerchantConfigInfo>) => void
): UseQueryResult<PaymentMerchantConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigMerchantMatched>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaymentConfigMerchantMatched(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaymentMerchantConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantMatched, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Debug matched payment provider config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderMatched, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigProviderMatched = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { namespace?: string | null; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentProviderConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentProviderConfigInfo>) => void
): UseQueryResult<PaymentProviderConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigProviderMatched>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaymentConfigProviderMatched(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PaymentProviderConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderMatched, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get special payment providers, such as ALIPAY, WXPAY.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderSpecial, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigProviderSpecial = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigProviderSpecial>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaymentConfigProviderSpecial()
      callback && callback(response)
      return response.data
    }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderSpecial, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get aggregate payment providers, such as XSOLLA, ADYEN.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment provider list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderAggregate, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigProviderAggregate = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigProviderAggregate>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaymentConfigProviderAggregate()
      callback && callback(response)
      return response.data
    }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderAggregate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update adyen config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.AdyenconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateAdyenconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAdyenconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.AdyenconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update wxpay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.WxpayconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateWxpayconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateWxpayconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.WxpayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test adyen configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;li&gt;merchantAccount&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;notificationHmacKey&lt;/li&gt;&lt;li&gt;notificationUsername&lt;/li&gt;&lt;li&gt;notificationPassword&lt;/li&gt;&lt;li&gt;liveEndpointUrlPrefix&lt;/li&gt;&lt;li&gt;allowedPaymentMethods&lt;/li&gt;&lt;li&gt;blockedPaymentMethods&lt;/li&gt;&lt;li&gt;settings&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAdyenconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantAdyenconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantAdyenconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAdyenconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test WxPay configuration. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantWxpayconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantWxpayconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: WxPayConfigRequest }>, 'mutationKey'>,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: WxPayConfigRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: WxPayConfigRequest }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantWxpayconfigTest(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantWxpayconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update alipay configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.AlipayconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateAlipayconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateAlipayconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.AlipayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update PayPal config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaypalconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdatePaypalconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaypalconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaypalconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update stripe config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.StripeconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateStripeconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStripeconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.StripeconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update xsolla configuration. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.XsollaconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateXsollaconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateXsollaconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.XsollaconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test AliPay configuration.Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAlipayconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantAlipayconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantAlipayconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAlipayconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test PayPal configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;clientID&lt;/li&gt;&lt;li&gt;clientSecret&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;webHookId&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantPaypalconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantPaypalconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantPaypalconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantPaypalconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test stripe configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;li&gt;allowedPaymentMethodTypes&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;publishableKey&lt;/li&gt;&lt;li&gt;webhookSecret&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantStripeconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantStripeconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantStripeconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantStripeconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check xsolla configuration, Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;merchantId&lt;/li&gt;&lt;li&gt;projectId&lt;/li&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;/ul&gt;&lt;h4&gt;Non-check list:&lt;/h4&gt;&lt;ul&gt;&lt;li&gt;projectSecretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantXsollaconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantXsollaconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: XsollaConfig }>, 'mutationKey'>,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: XsollaConfig }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: XsollaConfig }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantXsollaconfigTest(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantXsollaconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update Neon Pay config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.NeonpayconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateNeonpayconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateNeonpayconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.NeonpayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check Neon Pay configuration, Reference: &lt;a href=&#34;https://docs.neonpay.com/docs/checkout&#34;&gt;Neon Pay Document&lt;/a&gt;.&lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;apiKey&lt;/li&gt;&lt;li&gt;webhookSecretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantNeonpayconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantNeonpayconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantNeonpayconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantNeonpayconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update checkout.com config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.CheckoutconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateCheckoutconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCheckoutconfigPayment_ById(input.id, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.CheckoutconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update xsolla UI configuration.Reference: &lt;a href=&#34;https://developers.xsolla.com/api.html#ui-integrations&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.XsollauiconfigPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateXsollauiconfigPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { id: string; data: XsollaPaywallConfigRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { id: string; data: XsollaPaywallConfigRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: XsollaPaywallConfigRequest }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateXsollauiconfigPayment_ById(input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.XsollauiconfigPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test checkout.com configuration. &lt;h4&gt;Check List:&lt;/h4&gt; &lt;ul&gt;&lt;li&gt;publicKey&lt;/li&gt;&lt;li&gt;secretKey&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantCheckoutconfigTest, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_CreatePaymentConfigMerchantCheckoutconfigTestMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TestResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<
  TestResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPaymentConfigMerchantCheckoutconfigTest(input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantCheckoutconfigTest],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment domain whitelist config by namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment domain whitelist config info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigDomains, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaymentConfigDomains = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PaymentDomainWhitelistConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentDomainWhitelistConfigInfo>) => void
): UseQueryResult<PaymentDomainWhitelistConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaymentConfigDomains>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getPaymentConfigDomains()
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentDomainWhitelistConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigDomains, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment provider config by namespace.&lt;br&gt;&lt;pre&gt;&lt;p&gt;&lt;strong&gt;Request Body Parameters:&lt;/strong&gt;&lt;/p&gt;&lt;pre&gt;&lt;table&gt;&lt;tr&gt;&lt;td&gt;Parameter&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;domains&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;list of domains to whitelist for the return URL.&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Validation&lt;/i&gt;: the domain should include the protocol (http/https), but the whitelist check will only compare the host part (www.example.com)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: payment domain whitelist config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaymentConfigDomain, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdatePaymentConfigDomainMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentDomainWhitelistConfigInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: PaymentDomainWhitelistConfigEdit }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentDomainWhitelistConfigInfo) => void
): UseMutationResult<
  PaymentDomainWhitelistConfigInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: PaymentDomainWhitelistConfigEdit }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentDomainWhitelistConfigEdit }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePaymentConfigDomain(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigDomain],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test adyen configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.AdyenconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetAdyenconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetAdyenconfigTestPayment_ById>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAdyenconfigTestPayment_ById(input.id, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.AdyenconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Upload wxpay cert file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated payment merchant config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.WxpayconfigCertPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_UpdateWxpayconfigCertPayment_ByIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<PaymentMerchantConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id: string; data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { id: string; data: { file?: File } }) => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateWxpayconfigCertPayment_ById(input.id, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.WxpayconfigCertPayment_ById],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test WxPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://pay.weixin.qq.com/wiki/doc/api/native.php?chapter=9_1&#34;&gt;WxPay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test WxPay config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.WxpayconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetWxpayconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetWxpayconfigTestPayment_ById>[1]) => async () => {
    const response = await PaymentConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getWxpayconfigTestPayment_ById(input.id)
    callback && callback(response)
    return response.data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.WxpayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test AliPay configuration in payment merchant config. Reference: &lt;a href=&#34;https://docs.open.alipay.com/270/alipay.trade.page.pay&#34;&gt;Alipay Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test alipay config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.AlipayconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetAlipayconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetAlipayconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAlipayconfigTestPayment_ById(input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.AlipayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test PayPal configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.PaypalconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetPaypalconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetPaypalconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPaypalconfigTestPayment_ById(input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaypalconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test stripe configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test adyen config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.StripeconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetStripeconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetStripeconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStripeconfigTestPayment_ById(input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.StripeconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test xsolla configuration in payment merchant config. Reference: &lt;a href=&#34;https://developers.xsolla.com/?#simple-checkout&#34;&gt;Xsolla Document&lt;/a&gt;.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test xsolla config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.XsollaconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetXsollaconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetXsollaconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getXsollaconfigTestPayment_ById(input.id)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.XsollaconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test Neon Pay configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.NeonpayconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetNeonpayconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetNeonpayconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getNeonpayconfigTestPayment_ById(input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.NeonpayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Test checkout.com configuration in payment merchant config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: test result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentConfigAdmin.CheckoutconfigTestPayment_ById, input]
 * }
 * ```
 */
export const usePaymentConfigAdminApi_GetCheckoutconfigTestPayment_ById = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TestResult>) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof usePaymentConfigAdminApi_GetCheckoutconfigTestPayment_ById>[1]) => async () => {
      const response = await PaymentConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCheckoutconfigTestPayment_ById(input.id, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.CheckoutconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
