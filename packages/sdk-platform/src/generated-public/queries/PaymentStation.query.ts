/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { PaymentStationApi } from '../PaymentStationApi.js'

import { BinarySchema } from '../../generated-definitions/BinarySchema.js'
import { Customization } from '../../generated-definitions/Customization.js'
import { PaymentMethodArray } from '../../generated-definitions/PaymentMethodArray.js'
import { PaymentOrderDetails } from '../../generated-definitions/PaymentOrderDetails.js'
import { PaymentOrderPaidResult } from '../../generated-definitions/PaymentOrderPaidResult.js'
import { PaymentProcessResult } from '../../generated-definitions/PaymentProcessResult.js'
import { PaymentToken } from '../../generated-definitions/PaymentToken.js'
import { PaymentUrl } from '../../generated-definitions/PaymentUrl.js'
import { PaymentUrlCreate } from '../../generated-definitions/PaymentUrlCreate.js'
import { TaxResult } from '../../generated-definitions/TaxResult.js'

export enum Key_PaymentStation {
  PaymentTax = 'Platform.PaymentStation.PaymentTax',
  PaymentLink = 'Platform.PaymentStation.PaymentLink',
  PaymentQrcode = 'Platform.PaymentStation.PaymentQrcode',
  PaymentMethods = 'Platform.PaymentStation.PaymentMethods',
  PaymentReturnurl = 'Platform.PaymentStation.PaymentReturnurl',
  PaymentPublicconfig = 'Platform.PaymentStation.PaymentPublicconfig',
  PaymentCustomization = 'Platform.PaymentStation.PaymentCustomization',
  PayPayment_ByPaymentOrderNo = 'Platform.PaymentStation.PayPayment_ByPaymentOrderNo',
  InfoPayment_ByPaymentOrderNo = 'Platform.PaymentStation.InfoPayment_ByPaymentOrderNo',
  StatusPayment_ByPaymentOrderNo = 'Platform.PaymentStation.StatusPayment_ByPaymentOrderNo'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check and get a payment order&#39;s should pay tax.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: tax result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentTax, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentTax = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      paymentOrderNo: string | null
      paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      zipCode?: string | null
    }
  },
  options?: Omit<UseQueryOptions<TaxResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TaxResult>) => void
): UseQueryResult<TaxResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentTax>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentTax(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<TaxResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentTax, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment url.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;For Neon Pay payment provider, the &#39;neonPayConfig&#39; field can be used to provide success and cancel URL. If &#39;neonPayConfig&#39; field is not present, the &#39;returnUrl&#39; will be used for both success and cancel URL.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Get payment link&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentLink, input]
 * }
 * ```
 */
export const usePaymentStationApi_CreatePaymentLinkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<PaymentUrl, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentUrlCreate }>, 'mutationKey'>,
  callback?: (data: PaymentUrl) => void
): UseMutationResult<PaymentUrl, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentUrlCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentUrlCreate }) => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createPaymentLink(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentStation.PaymentLink],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get qrcode.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: QRCode image stream&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentQrcode, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentQrcode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { code: string | null } },
  options?: Omit<UseQueryOptions<BinarySchema, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<BinarySchema>) => void
): UseQueryResult<BinarySchema, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentQrcode>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentQrcode(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<BinarySchema, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentQrcode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment methods.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment method list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentMethods, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentMethods = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { paymentOrderNo: string | null } },
  options?: Omit<UseQueryOptions<PaymentMethodArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentMethodArray>) => void
): UseQueryResult<PaymentMethodArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentMethods>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentMethods(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentMethodArray, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentMethods, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Normalize payment return url for payment provider&lt;br&gt;Payment response: &lt;table&gt;&lt;tr&gt;&lt;td&gt;Field&lt;/td&gt;&lt;td&gt;Type&lt;/td&gt;&lt;td&gt;Required&lt;/td&gt;&lt;td&gt;Description&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;orderNo&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;order no&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;paymentStatus&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;&lt;ul&gt;&lt;li&gt;DONE: The payment was successfully completed.&lt;/li&gt;&lt;li&gt;CANCELLED: The payment was cancelled by the shopper before completion, or the shopper returned to the merchant&#39;s site before completing the transaction.&lt;/li&gt;&lt;li&gt;PENDING: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to be completed. When the shopper has completed the payment you will receive a successful AUTHORISATION.&lt;/li&gt;&lt;li&gt;RECEIVED: Inform the shopper that you&#39;ve received their order, and are waiting for the payment to clear.&lt;/li&gt;&lt;li&gt;UNKNOWN: An error occurred during the payment processing.&lt;/li&gt;&lt;li&gt;FAILED: Shopper paid failed because of various reasons.&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;reason&lt;/td&gt;&lt;td&gt;String&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;payment status reason&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;xsolla&lt;/i&gt;: parameters &#39;user_id&#39;, &#39;foreinginvoice&#39;, &#39;invoice_id&#39; and &#39;status&#39; will be automatically added to the link&lt;/li&gt;&lt;li&gt;&lt;i&gt;adyen&lt;/i&gt;: https://docs.adyen.com/developers/checkout/web-sdk&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentReturnurl, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentReturnurl = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      orderNo: string | null
      paymentOrderNo: string | null
      paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      returnUrl: string | null
      PayerID?: string | null
      foreinginvoice?: string | null
      invoice_id?: string | null
      payload?: string | null
      redirectResult?: string | null
      resultCode?: string | null
      sessionId?: string | null
      status?: string | null
      token?: string | null
      type?: string | null
      user_id?: string | null
    }
  },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentReturnurl>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentReturnurl(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentReturnurl, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment provider public config, at current only Strip provide public config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Public config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentPublicconfig, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentPublicconfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      region: string | null
      sandbox?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentPublicconfig>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentPublicconfig(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentPublicconfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment provider customization, at current only Adyen provide customization. This api has been deprecated, pls use /public/namespaces/{namespace}/payment/publicconfig to get adyen config&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: customization&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentCustomization, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentCustomization = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      region: string | null
      sandbox?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<Customization, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<Customization>) => void
): UseQueryResult<Customization, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetPaymentCustomization>[1]) => async () => {
    const response = await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPaymentCustomization(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<Customization, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentCustomization, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Do payment(For now, this only support checkout.com).&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment process result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PayPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentStationApi_CreatePayPayment_ByPaymentOrderNoMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PaymentProcessResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        paymentOrderNo: string
        data: PaymentToken
        queryParams?: {
          paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
          zipCode?: string | null
        }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: PaymentProcessResult) => void
): UseMutationResult<
  PaymentProcessResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    paymentOrderNo: string
    data: PaymentToken
    queryParams?: {
      paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
      zipCode?: string | null
    }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      paymentOrderNo: string
      data: PaymentToken
      queryParams?: {
        paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA'
        zipCode?: string | null
      }
    }
  ) => {
    const response = await PaymentStationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPayPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PaymentStation.PayPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment order info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order details&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.InfoPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetInfoPayment_ByPaymentOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderDetails, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderDetails>) => void
): UseQueryResult<PaymentOrderDetails, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetInfoPayment_ByPaymentOrderNo>[1]) => async () => {
    const response = await PaymentStationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getInfoPayment_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderDetails, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.InfoPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Check payment order paid status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment order paid result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.StatusPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetStatusPayment_ByPaymentOrderNo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { paymentOrderNo: string },
  options?: Omit<UseQueryOptions<PaymentOrderPaidResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PaymentOrderPaidResult>) => void
): UseQueryResult<PaymentOrderPaidResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof usePaymentStationApi_GetStatusPayment_ByPaymentOrderNo>[1]) => async () => {
    const response = await PaymentStationApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatusPayment_ByPaymentOrderNo(input.paymentOrderNo)
    callback && callback(response)
    return response.data
  }

  return useQuery<PaymentOrderPaidResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.StatusPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
