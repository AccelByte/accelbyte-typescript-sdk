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
import { FulfillmentAdminApi } from '../FulfillmentAdminApi.js'

import { FulfillCodeRequest } from '../../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentHistoryPagingSlicedResult } from '../../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentPagingSlicedResult } from '../../generated-definitions/FulfillmentPagingSlicedResult.js'
import { FulfillmentRequest } from '../../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../../generated-definitions/FulfillmentResult.js'
import { FulfillmentV2Request } from '../../generated-definitions/FulfillmentV2Request.js'
import { FulfillmentV2Result } from '../../generated-definitions/FulfillmentV2Result.js'
import { PreCheckFulfillmentRequest } from '../../generated-definitions/PreCheckFulfillmentRequest.js'
import { RevokeFulfillmentV2Result } from '../../generated-definitions/RevokeFulfillmentV2Result.js'
import { RewardsRequest } from '../../generated-definitions/RewardsRequest.js'

export enum Key_FulfillmentAdmin {
  Fulfillments_v2 = 'Platform.FulfillmentAdmin.Fulfillments_v2',
  FulfillmentHistory = 'Platform.FulfillmentAdmin.FulfillmentHistory',
  Fulfillment_ByUserId = 'Platform.FulfillmentAdmin.Fulfillment_ByUserId',
  FulfillmentCode_ByUserId = 'Platform.FulfillmentAdmin.FulfillmentCode_ByUserId',
  FulfillmentReward_ByUserId = 'Platform.FulfillmentAdmin.FulfillmentReward_ByUserId',
  FulfillmentPreCheck_ByUserId = 'Platform.FulfillmentAdmin.FulfillmentPreCheck_ByUserId',
  FulfillmentReward_ByUserId_v2 = 'Platform.FulfillmentAdmin.FulfillmentReward_ByUserId_v2',
  Fulfillment_ByUserId_ByTransactionId_v2 = 'Platform.FulfillmentAdmin.Fulfillment_ByUserId_ByTransactionId_v2',
  Retry_ByUserId_ByTransactionId_v2 = 'Platform.FulfillmentAdmin.Retry_ByUserId_ByTransactionId_v2',
  Revoke_ByUserId_ByTransactionId_v2 = 'Platform.FulfillmentAdmin.Revoke_ByUserId_ByTransactionId_v2'
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Query fulfillments in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment info:&lt;ul&gt;&lt;li&gt;storeId in items can be ignored&lt;/li&gt;&lt;li&gt;error in successList will always be null&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.Fulfillments_v2, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_GetFulfillments_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      startTime?: string | null
      state?: 'FULFILLED' | 'FULFILL_FAILED' | 'REVOKED' | 'REVOKE_FAILED'
      transactionId?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<FulfillmentPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FulfillmentPagingSlicedResult>) => void
): UseQueryResult<FulfillmentPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFulfillmentAdminApi_GetFulfillments_v2>[1]) => async () => {
    const response = await FulfillmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFulfillments_v2(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FulfillmentPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentAdmin.Fulfillments_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.FulfillmentHistory, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_GetFulfillmentHistory = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number; status?: 'FAIL' | 'SUCCESS'; userId?: string | null } },
  options?: Omit<UseQueryOptions<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<FulfillmentHistoryPagingSlicedResult>) => void
): UseQueryResult<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFulfillmentAdminApi_GetFulfillmentHistory>[1]) => async () => {
    const response = await FulfillmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFulfillmentHistory(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<FulfillmentHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentAdmin.FulfillmentHistory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.Fulfillment_ByUserId, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_CreateFulfillment_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: FulfillmentRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: FulfillmentRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: FulfillmentRequest }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillment_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.Fulfillment_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.FulfillmentCode_ByUserId, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_CreateFulfillmentCode_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: FulfillCodeRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: FulfillCodeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: FulfillCodeRequest }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillmentCode_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentCode_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_CreateFulfillmentReward_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RewardsRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RewardsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: RewardsRequest }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillmentReward_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.FulfillmentPreCheck_ByUserId, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_CreateFulfillmentPreCheck_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FulfillmentItemArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: PreCheckFulfillmentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: FulfillmentItemArray) => void
): UseMutationResult<
  FulfillmentItemArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: PreCheckFulfillmentRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: PreCheckFulfillmentRequest }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillmentPreCheck_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentPreCheck_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId_v2, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_CreateFulfillmentReward_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RewardsRequest }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentResult) => void
): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RewardsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: RewardsRequest }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createFulfillmentReward_ByUserId_v2(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.FulfillmentReward_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Fulfill items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: storeId, region, language, and entitlementCollectionId can be ignored.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.Fulfillment_ByUserId_ByTransactionId_v2, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_UpdateFulfillment_ByUserId_ByTransactionIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      FulfillmentV2Result,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; transactionId: string; data: FulfillmentV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: FulfillmentV2Result) => void
): UseMutationResult<
  FulfillmentV2Result,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; transactionId: string; data: FulfillmentV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; transactionId: string; data: FulfillmentV2Request }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateFulfillment_ByUserId_ByTransactionId_v2(input.userId, input.transactionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.Fulfillment_ByUserId_ByTransactionId_v2],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Retry fulfill items by transactionId without sending the original payload.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.Retry_ByUserId_ByTransactionId_v2, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_UpdateRetry_ByUserId_ByTransactionIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<FulfillmentV2Result, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; transactionId: string }>,
    'mutationKey'
  >,
  callback?: (data: FulfillmentV2Result) => void
): UseMutationResult<FulfillmentV2Result, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; transactionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; transactionId: string }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRetry_ByUserId_ByTransactionId_v2(input.userId, input.transactionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.Retry_ByUserId_ByTransactionId_v2],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentAdmin.Revoke_ByUserId_ByTransactionId_v2, input]
 * }
 * ```
 */
export const useFulfillmentAdminApi_UpdateRevoke_ByUserId_ByTransactionIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RevokeFulfillmentV2Result, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; transactionId: string }>,
    'mutationKey'
  >,
  callback?: (data: RevokeFulfillmentV2Result) => void
): UseMutationResult<RevokeFulfillmentV2Result, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; transactionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; transactionId: string }) => {
    const response = await FulfillmentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevoke_ByUserId_ByTransactionId_v2(input.userId, input.transactionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_FulfillmentAdmin.Revoke_ByUserId_ByTransactionId_v2],
    mutationFn,
    ...options
  })
}
