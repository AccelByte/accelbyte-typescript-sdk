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
import { RevocationAdminApi } from '../RevocationAdminApi.js'

import { RevocationConfigInfo } from '../../generated-definitions/RevocationConfigInfo.js'
import { RevocationConfigUpdate } from '../../generated-definitions/RevocationConfigUpdate.js'
import { RevocationHistoryPagingSlicedResult } from '../../generated-definitions/RevocationHistoryPagingSlicedResult.js'
import { RevocationRequest } from '../../generated-definitions/RevocationRequest.js'
import { RevocationResult } from '../../generated-definitions/RevocationResult.js'

export enum Key_RevocationAdmin {
  RevocationConfig = 'Platform.RevocationAdmin.RevocationConfig',
  RevocationHistory = 'Platform.RevocationAdmin.RevocationHistory',
  Revocation_ByUserId = 'Platform.RevocationAdmin.Revocation_ByUserId'
}

/**
 * Delete revocation config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RevocationAdmin.RevocationConfig, input]
 * }
 * ```
 */
export const useRevocationAdminApi_DeleteRevocationConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await RevocationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRevocationConfig()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.RevocationConfig],
    mutationFn,
    ...options
  })
}

/**
 * Get revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RevocationAdmin.RevocationConfig, input]
 * }
 * ```
 */
export const useRevocationAdminApi_GetRevocationConfig = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RevocationConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RevocationConfigInfo>) => void
): UseQueryResult<RevocationConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRevocationAdminApi_GetRevocationConfig>[1]) => async () => {
    const response = await RevocationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRevocationConfig()
    callback && callback(response)
    return response.data
  }

  return useQuery<RevocationConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_RevocationAdmin.RevocationConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update revocation configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Revocation config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RevocationAdmin.RevocationConfig, input]
 * }
 * ```
 */
export const useRevocationAdminApi_UpdateRevocationConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RevocationConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RevocationConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RevocationConfigInfo) => void
): UseMutationResult<RevocationConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RevocationConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RevocationConfigUpdate }) => {
    const response = await RevocationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRevocationConfig(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.RevocationConfig],
    mutationFn,
    ...options
  })
}

/**
 * Query revocation histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query revocation history&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RevocationAdmin.RevocationHistory, input]
 * }
 * ```
 */
export const useRevocationAdminApi_GetRevocationHistory = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      endTime?: string | null
      limit?: number
      offset?: number
      source?: 'DLC' | 'IAP' | 'ORDER' | 'OTHER'
      startTime?: string | null
      status?: 'FAIL' | 'SUCCESS'
      transactionId?: string | null
      userId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RevocationHistoryPagingSlicedResult>) => void
): UseQueryResult<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRevocationAdminApi_GetRevocationHistory>[1]) => async () => {
    const response = await RevocationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRevocationHistory(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RevocationHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_RevocationAdmin.RevocationHistory, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Do revocation.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revocation results&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RevocationAdmin.Revocation_ByUserId, input]
 * }
 * ```
 */
export const useRevocationAdminApi_UpdateRevocation_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RevocationResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RevocationRequest }>,
    'mutationKey'
  >,
  callback?: (data: RevocationResult) => void
): UseMutationResult<RevocationResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: RevocationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: RevocationRequest }) => {
    const response = await RevocationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevocation_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RevocationAdmin.Revocation_ByUserId],
    mutationFn,
    ...options
  })
}
