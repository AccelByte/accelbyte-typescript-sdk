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
import { LeaderboardConfigurationV3AdminApi } from '../LeaderboardConfigurationV3AdminApi.js'

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../../generated-definitions/LeaderboardConfigReqV3.js'
import { UpdateLeaderboardConfigReqV3 } from '../../generated-definitions/UpdateLeaderboardConfigReqV3.js'

export enum Key_LeaderboardConfigurationV3Admin {
  Leaderboards_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboards_v3',
  Leaderboard_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboard_v3',
  LeaderboardDelete_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.LeaderboardDelete_v3',
  Leaderboard_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3',
  Hard_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode_v3'
}

/**
 * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboards_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_GetLeaderboards_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllLeaderboardConfigsRespV3>) => void
): UseQueryResult<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationV3AdminApi_GetLeaderboards_v3>[1]) => async () => {
      const response = await LeaderboardConfigurationV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLeaderboards_v3(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboards_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_CreateLeaderboardMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReqV3 }>,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigRespV3) => void
): UseMutationResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReqV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReqV3 }) => {
    const response = await LeaderboardConfigurationV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLeaderboard_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint delete multiple leaderboards configuration in one request&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.LeaderboardDelete_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_CreateLeaderboardDeleteMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }>,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkLeaderboardsResp) => void
): UseMutationResult<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }) => {
    const response = await LeaderboardConfigurationV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLeaderboardDelete_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.LeaderboardDelete_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint delete a leaderboard configuration&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_DeleteLeaderboard_ByLeaderboardCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string }) => {
    const response = await LeaderboardConfigurationV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_GetLeaderboard_ByLeaderboardCode_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string },
  options?: Omit<UseQueryOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardConfigRespV3>) => void
): UseQueryResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationV3AdminApi_GetLeaderboard_ByLeaderboardCode_v3>[1]) =>
    async () => {
      const response = await LeaderboardConfigurationV3AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardConfigRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;leaderboardCode: unique leaderboard config code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;name: leaderboard name, maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;description: leaderboard description, maximum length for leaderboard description is 2048 characters. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;iconURL: leaderboard icon image url. &lt;b&gt;(optional)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;allTime: if true, all time leaderboard will be created. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;descending: leaderboard order. If true, the points will be sorted in descending order. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;statCode: Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;cycleIds: Statistic cycle ids that will be tracked in the leaderboard. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_UpdateLeaderboard_ByLeaderboardCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetLeaderboardConfigRespV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }
    >,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigRespV3) => void
): UseMutationResult<
  GetLeaderboardConfigRespV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReqV3 }) => {
    const response = await LeaderboardConfigurationV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}

/**
 * &lt;p&gt;&lt;b&gt;[Test Facility Only]&lt;/b&gt;&lt;/p&gt; &lt;p&gt;Required permission &#39;ADMIN:NAMESPACE:{namespace}:LEADERBOARD:HARDDELETE [DELETE]&#39;&lt;/p&gt; &lt;p&gt;This endpoint will delete leaderboard configuration and its data&lt;/p&gt; &lt;p&gt;Note: this endpoint only works on development environment, you might want to use &lt;b&gt;archive endpoint&lt;/b&gt; instead hard delete.&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationV3AdminApi_DeleteHard_ByLeaderboardCodeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string }) => {
    const response = await LeaderboardConfigurationV3AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteHard_ByLeaderboardCode_v3(input.leaderboardCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}
