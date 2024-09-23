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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { RewardApi } from '../RewardApi.js'

import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../../generated-definitions/RewardPagingSlicedResult.js'

export enum Key_Reward {
  RewardsByCode = 'Platform.Reward.RewardsByCode',
  Reward_ByRewardId = 'Platform.Reward.Reward_ByRewardId',
  RewardsByCriteria = 'Platform.Reward.RewardsByCriteria'
}

/**
 * This API is used to get reward by reward code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Reward.RewardsByCode, input]
 * }
 * ```
 */
export const useRewardApi_GetRewardsByCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { rewardCode: string | null } },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardInfo>) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardApi_GetRewardsByCode>[1]) => async () => {
    const response = await RewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewardsByCode(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_Reward.RewardsByCode, input],
    queryFn: queryFn(sdk, input),
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
 *    queryKey: [Key_Reward.Reward_ByRewardId, input]
 * }
 * ```
 */
export const useRewardApi_GetReward_ByRewardId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { rewardId: string },
  options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardInfo>) => void
): UseQueryResult<RewardInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardApi_GetReward_ByRewardId>[1]) => async () => {
    const response = await RewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getReward_ByRewardId(
      input.rewardId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_Reward.Reward_ByRewardId, input],
    queryFn: queryFn(sdk, input),
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
 *    queryKey: [Key_Reward.RewardsByCriteria, input]
 * }
 * ```
 */
export const useRewardApi_GetRewardsByCriteria = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { eventTopic?: string | null; limit?: number; offset?: number; sortBy?: string[] } },
  options?: Omit<UseQueryOptions<RewardPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RewardPagingSlicedResult>) => void
): UseQueryResult<RewardPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRewardApi_GetRewardsByCriteria>[1]) => async () => {
    const response = await RewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRewardsByCriteria(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RewardPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Reward.RewardsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
