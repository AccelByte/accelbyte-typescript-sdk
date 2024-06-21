/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PaymentConfigAdminApi } from '../PaymentConfigAdminApi.js'

import { AdyenConfig } from '../../generated-definitions/AdyenConfig.js'
import { AliPayConfig } from '../../generated-definitions/AliPayConfig.js'
import { CheckoutConfig } from '../../generated-definitions/CheckoutConfig.js'
import { NeonPayConfig } from '../../generated-definitions/NeonPayConfig.js'
import { PayPalConfig } from '../../generated-definitions/PayPalConfig.js'
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
  PaymentConfigTax = 'PaymentConfigAdmin.PaymentConfigTax',
  PaymentConfigProvider = 'PaymentConfigAdmin.PaymentConfigProvider',
  PaymentConfigMerchant_ById = 'PaymentConfigAdmin.PaymentConfigMerchant_ById',
  PaymentConfigProvider_ById = 'PaymentConfigAdmin.PaymentConfigProvider_ById',
  PaymentConfigMerchantMatched = 'PaymentConfigAdmin.PaymentConfigMerchantMatched',
  PaymentConfigProviderMatched = 'PaymentConfigAdmin.PaymentConfigProviderMatched',
  PaymentConfigProviderSpecial = 'PaymentConfigAdmin.PaymentConfigProviderSpecial',
  PaymentConfigProviderAggregate = 'PaymentConfigAdmin.PaymentConfigProviderAggregate',
  AdyenconfigPayment_ById = 'PaymentConfigAdmin.AdyenconfigPayment_ById',
  WxpayconfigPayment_ById = 'PaymentConfigAdmin.WxpayconfigPayment_ById',
  PaymentConfigMerchantAdyenconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantAdyenconfigTest',
  PaymentConfigMerchantWxpayconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantWxpayconfigTest',
  AlipayconfigPayment_ById = 'PaymentConfigAdmin.AlipayconfigPayment_ById',
  PaypalconfigPayment_ById = 'PaymentConfigAdmin.PaypalconfigPayment_ById',
  StripeconfigPayment_ById = 'PaymentConfigAdmin.StripeconfigPayment_ById',
  XsollaconfigPayment_ById = 'PaymentConfigAdmin.XsollaconfigPayment_ById',
  PaymentConfigMerchantAlipayconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantAlipayconfigTest',
  PaymentConfigMerchantPaypalconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantPaypalconfigTest',
  PaymentConfigMerchantStripeconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantStripeconfigTest',
  PaymentConfigMerchantXsollaconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantXsollaconfigTest',
  NeonpayconfigPayment_ById = 'PaymentConfigAdmin.NeonpayconfigPayment_ById',
  PaymentConfigMerchantNeonpayconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantNeonpayconfigTest',
  CheckoutconfigPayment_ById = 'PaymentConfigAdmin.CheckoutconfigPayment_ById',
  XsollauiconfigPayment_ById = 'PaymentConfigAdmin.XsollauiconfigPayment_ById',
  PaymentConfigMerchantCheckoutconfigTest = 'PaymentConfigAdmin.PaymentConfigMerchantCheckoutconfigTest',
  AdyenconfigTestPayment_ById = 'PaymentConfigAdmin.AdyenconfigTestPayment_ById',
  WxpayconfigCertPayment_ById = 'PaymentConfigAdmin.WxpayconfigCertPayment_ById',
  WxpayconfigTestPayment_ById = 'PaymentConfigAdmin.WxpayconfigTestPayment_ById',
  AlipayconfigTestPayment_ById = 'PaymentConfigAdmin.AlipayconfigTestPayment_ById',
  PaypalconfigTestPayment_ById = 'PaymentConfigAdmin.PaypalconfigTestPayment_ById',
  StripeconfigTestPayment_ById = 'PaymentConfigAdmin.StripeconfigTestPayment_ById',
  XsollaconfigTestPayment_ById = 'PaymentConfigAdmin.XsollaconfigTestPayment_ById',
  NeonpayconfigTestPayment_ById = 'PaymentConfigAdmin.NeonpayconfigTestPayment_ById',
  CheckoutconfigTestPayment_ById = 'PaymentConfigAdmin.CheckoutconfigTestPayment_ById'
}

export const useAdmPaymentConfigTax = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PaymentTaxConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentTaxConfigInfo) => void
): UseQueryResult<PaymentTaxConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigTax>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigTax()
    callback && callback(data)
    return data
  }

  return useQuery<PaymentTaxConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigTax, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdatePaymentConfigTaxMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<PaymentTaxConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentTaxConfigEdit }>, 'mutationKey'>,
  callback?: (data: PaymentTaxConfigInfo) => void
): UseMutationResult<PaymentTaxConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentTaxConfigEdit }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PaymentTaxConfigEdit }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePaymentConfigTax(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigTax],
    mutationFn,
    ...options
  })
}

export const useAdmPaymentConfigProvider = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; namespace?: string | null; offset?: number; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentProviderConfigPagingSlicedResult) => void
): UseQueryResult<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigProvider>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigProvider(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentProviderConfigPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProvider, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreatePaymentConfigProviderMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentProviderConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentProviderConfigEdit }>,
    'mutationKey'
  >,
  callback?: (data: PaymentProviderConfigInfo) => void
): UseMutationResult<PaymentProviderConfigInfo, AxiosError<ApiError>, ApiArgs & { data: PaymentProviderConfigEdit }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PaymentProviderConfigEdit }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).createPaymentConfigProvider(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider],
    mutationFn,
    ...options
  })
}

export const useAdmPaymentConfigMerchant_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string },
  options?: Omit<UseQueryOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseQueryResult<PaymentMerchantConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigMerchant_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigMerchant_ById(input.id)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentMerchantConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchant_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeletePaymentConfigProvider_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { id: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).deletePaymentConfigProvider_ById(
      input.id
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePaymentConfigProvider_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentProviderConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: PaymentProviderConfigEdit }>,
    'mutationKey'
  >,
  callback?: (data: PaymentProviderConfigInfo) => void
): UseMutationResult<PaymentProviderConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: PaymentProviderConfigEdit }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: PaymentProviderConfigEdit }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePaymentConfigProvider_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigProvider_ById],
    mutationFn,
    ...options
  })
}

export const useAdmPaymentConfigMerchantMatched = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { namespace?: string | null; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseQueryResult<PaymentMerchantConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigMerchantMatched>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigMerchantMatched(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentMerchantConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantMatched, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaymentConfigProviderMatched = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { namespace?: string | null; region?: string | null } },
  options?: Omit<UseQueryOptions<PaymentProviderConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PaymentProviderConfigInfo) => void
): UseQueryResult<PaymentProviderConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigProviderMatched>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigProviderMatched(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<PaymentProviderConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderMatched, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaymentConfigProviderSpecial = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigProviderSpecial>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigProviderSpecial()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderSpecial, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaymentConfigProviderAggregate = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaymentConfigProviderAggregate>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaymentConfigProviderAggregate()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaymentConfigProviderAggregate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateAdyenconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: AdyenConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAdyenconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.AdyenconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateWxpayconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: WxPayConfigRequest; queryParams?: { validate?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateWxpayconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.WxpayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantAdyenconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AdyenConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantAdyenconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAdyenconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantWxpayconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: WxPayConfigRequest }>, 'mutationKey'>,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: WxPayConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: WxPayConfigRequest }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantWxpayconfigTest(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantWxpayconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateAlipayconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: AliPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateAlipayconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.AlipayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdatePaypalconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: PayPalConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updatePaypalconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaypalconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStripeconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: StripeConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStripeconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.StripeconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateXsollaconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: XsollaConfig; queryParams?: { validate?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateXsollaconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.XsollaconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantAlipayconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: AliPayConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantAlipayconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantAlipayconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantPaypalconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: PayPalConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantPaypalconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantPaypalconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantStripeconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StripeConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantStripeconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantStripeconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantXsollaconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: XsollaConfig }>, 'mutationKey'>,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: XsollaConfig }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: XsollaConfig }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantXsollaconfigTest(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantXsollaconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateNeonpayconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: NeonPayConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateNeonpayconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.NeonpayconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantNeonpayconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: NeonPayConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantNeonpayconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantNeonpayconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateCheckoutconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentMerchantConfigInfo,
      AxiosError<ApiError>,
      ApiArgs & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<
  PaymentMerchantConfigInfo,
  AxiosError<ApiError>,
  ApiArgs & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { id: string; data: CheckoutConfig; queryParams?: { sandbox?: boolean | null; validate?: boolean | null } }
  ) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCheckoutconfigPayment_ById(
      input.id,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.CheckoutconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateXsollauiconfigPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: XsollaPaywallConfigRequest }>,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<PaymentMerchantConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: XsollaPaywallConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: XsollaPaywallConfigRequest }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateXsollauiconfigPayment_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.XsollauiconfigPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePaymentConfigMerchantCheckoutconfigTestMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<TestResult, AxiosError<ApiError>, ApiArgs & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }>,
    'mutationKey'
  >,
  callback?: (data: TestResult) => void
): UseMutationResult<TestResult, AxiosError<ApiError>, ApiArgs & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CheckoutConfig; queryParams?: { sandbox?: boolean | null } }) => {
    const data = await PaymentConfigAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPaymentConfigMerchantCheckoutconfigTest(input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.PaymentConfigMerchantCheckoutconfigTest],
    mutationFn,
    ...options
  })
}

export const useAdmAdyenconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAdyenconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getAdyenconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.AdyenconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateWxpayconfigCertPayment_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<PaymentMerchantConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: PaymentMerchantConfigInfo) => void
): UseMutationResult<PaymentMerchantConfigInfo, AxiosError<ApiError>, ApiArgs & { id: string; data: { file?: File } }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: { file?: File } }) => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateWxpayconfigCertPayment_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_PaymentConfigAdmin.WxpayconfigCertPayment_ById],
    mutationFn,
    ...options
  })
}

export const useAdmWxpayconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmWxpayconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getWxpayconfigTestPayment_ById(input.id)
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.WxpayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAlipayconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAlipayconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getAlipayconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.AlipayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPaypalconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPaypalconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getPaypalconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.PaypalconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStripeconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStripeconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getStripeconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.StripeconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmXsollaconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmXsollaconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getXsollaconfigTestPayment_ById(input.id)
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.XsollaconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmNeonpayconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNeonpayconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getNeonpayconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.NeonpayconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCheckoutconfigTestPayment_ById = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { id: string; queryParams?: { sandbox?: boolean | null } },
  options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TestResult) => void
): UseQueryResult<TestResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCheckoutconfigTestPayment_ById>[1]) => async () => {
    const data = await PaymentConfigAdminApi(sdk, { namespace: input.namespace }).getCheckoutconfigTestPayment_ById(
      input.id,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentConfigAdmin.CheckoutconfigTestPayment_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
