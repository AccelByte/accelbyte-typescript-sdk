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
import { RewardAdminApi } from '../RewardAdminApi.js'

import { ConditionMatchResult } from '../../generated-definitions/ConditionMatchResult.js'
import { DeleteRewardConditionRequest } from '../../generated-definitions/DeleteRewardConditionRequest.js'
import { EventPayload } from '../../generated-definitions/EventPayload.js'
import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../../generated-definitions/RewardPagingSlicedResult.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'

export enum Key_RewardAdmin {
  Reward = 'Platform.RewardAdmin.Reward',
  RewardsExport = 'Platform.RewardAdmin.RewardsExport',
  RewardImport = 'Platform.RewardAdmin.RewardImport',
  Reward_ByRewardId = 'Platform.RewardAdmin.Reward_ByRewardId',
  RewardsByCriteria = 'Platform.RewardAdmin.RewardsByCriteria',
  Match_ByRewardId = 'Platform.RewardAdmin.Match_ByRewardId',
  Record_ByRewardId = 'Platform.RewardAdmin.Record_ByRewardId'
}

/**
 * This API is used to create a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward data&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward, input]
 * }
 * ```
 */
export const useRewardAdminApi_CreateRewardMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RewardCreate }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RewardCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RewardCreate }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createReward(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward],
    mutationFn,
    ...options
  })
}

/**
 * Export reward configurations for a given namespace into file. At current, only JSON file is supported.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.RewardsExport, input]
 * }
 * ```
 */
export const useRewardAdminApi_GetRewardsExport = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardAdminApi_GetRewardsExport>[1]) => async () => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewardsExport()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Import reward configurations for a given namespace from file. At current, only JSON file is supported.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.RewardImport, input]
 * }
 * ```
 */
export const useRewardAdminApi_CreateRewardImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File }; queryParams: { replaceExisting: boolean | null } }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRewardImport(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.RewardImport],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a reward by reward Id. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted reward data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input]
 * }
 * ```
 */
export const useRewardAdminApi_DeleteReward_ByRewardIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string }>, 'mutationKey'>,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { rewardId: string }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteReward_ByRewardId(
      input.rewardId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input]
 * }
 * ```
 */
export const useRewardAdminApi_GetReward_ByRewardId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { rewardId: string },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardInfo>) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardAdminApi_GetReward_ByRewardId>[1]) => async () => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReward_ByRewardId(
      input.rewardId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to update a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input]
 * }
 * ```
 */
export const useRewardAdminApi_UpdateReward_ByRewardIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: RewardUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RewardInfo) => void
): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: RewardUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { rewardId: string; data: RewardUpdate }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateReward_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.RewardsByCriteria, input]
 * }
 * ```
 */
export const useRewardAdminApi_GetRewardsByCriteria = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { eventTopic?: string | null; limit?: number; offset?: number; sortBy?: string[] } },
  options?: Omit<UseQueryOptions<RewardPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardPagingSlicedResult>) => void
): UseQueryResult<RewardPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardAdminApi_GetRewardsByCriteria>[1]) => async () => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewardsByCriteria(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: match result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Match_ByRewardId, input]
 * }
 * ```
 */
export const useRewardAdminApi_UpdateMatch_ByRewardIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ConditionMatchResult, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: EventPayload }>,
    'mutationKey'
  >,
  callback?: (data: ConditionMatchResult) => void
): UseMutationResult<ConditionMatchResult, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: EventPayload }> => {
  const mutationFn = async (input: SdkSetConfigParam & { rewardId: string; data: EventPayload }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateMatch_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Match_ByRewardId],
    mutationFn,
    ...options
  })
}

/**
 * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; This API is used to delete a reward condition record by reward Id and condition Name (optional). &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: 204 No Content &lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RewardAdmin.Record_ByRewardId, input]
 * }
 * ```
 */
export const useRewardAdminApi_DeleteRecord_ByRewardIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: DeleteRewardConditionRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { rewardId: string; data: DeleteRewardConditionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { rewardId: string; data: DeleteRewardConditionRequest }) => {
    const response = await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRecord_ByRewardId(
      input.rewardId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RewardAdmin.Record_ByRewardId],
    mutationFn,
    ...options
  })
}
