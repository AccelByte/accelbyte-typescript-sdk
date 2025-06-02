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
import { LeaderboardConfigurationAdminApi } from '../LeaderboardConfigurationAdminApi.js'

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../../generated-definitions/UpdateLeaderboardConfigReq.js'

export enum Key_LeaderboardConfigurationAdmin {
  Leaderboards = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboards',
  Leaderboard = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboard',
  LeaderboardDelete = 'Leaderboard.LeaderboardConfigurationAdmin.LeaderboardDelete',
  Leaderboard_ByLeaderboardCode = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode',
  Hard_ByLeaderboardCode = 'Leaderboard.LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode'
}

/**
 * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboards, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_GetLeaderboards = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { isArchived?: boolean | null; isDeleted?: boolean | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAllLeaderboardConfigsResp>) => void
): UseQueryResult<GetAllLeaderboardConfigsResp, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationAdminApi_GetLeaderboards>[1]) => async () => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLeaderboards(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt;&lt;li&gt;LeaderboardConfig code must be lowercase and maximum length is 48 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.Default is &#39;00:00&#39;.&lt;/li&gt; &lt;li&gt;Stat Code is related with statistic code in statistic service. &lt;b&gt;(required)&lt;/b&gt;.&lt;/li&gt; &lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_CreateLeaderboardMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }>,
    'mutationKey'
  >,
  callback?: (data: LeaderboardConfigReq) => void
): UseMutationResult<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReq }) => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLeaderboard(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard],
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
 *    queryKey: [Key_LeaderboardConfigurationAdmin.LeaderboardDelete, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_CreateLeaderboardDeleteMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }>,
    'mutationKey'
  >,
  callback?: (data: DeleteBulkLeaderboardsResp) => void
): UseMutationResult<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }) => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLeaderboardDelete(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.LeaderboardDelete],
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
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_DeleteLeaderboard_ByLeaderboardCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string }) => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLeaderboard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
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
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_GetLeaderboard_ByLeaderboardCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { leaderboardCode: string },
  options?: Omit<UseQueryOptions<GetLeaderboardConfigResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetLeaderboardConfigResp>) => void
): UseQueryResult<GetLeaderboardConfigResp, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useLeaderboardConfigurationAdminApi_GetLeaderboard_ByLeaderboardCode>[1]) => async () => {
      const response = await LeaderboardConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLeaderboard_ByLeaderboardCode(input.leaderboardCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<GetLeaderboardConfigResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;&lt;b&gt;Fields :&lt;/b&gt;&lt;/p&gt; &lt;ul&gt; &lt;li&gt;Maximum length for leaderboard name is 128 characters.&lt;/li&gt; &lt;li&gt;Start time must be follow RFC3339 standard. e.g. 2020-10-02T15:00:00.05Z&lt;/li&gt; &lt;li&gt;Season period must be greater than 31 days.&lt;/li&gt; &lt;li&gt;If seasonPeriod is filled, the LeaderboardConfig would have seasonal leaderboard.&lt;/li&gt; &lt;li&gt;Reset Date must be a number 1 - 31. Default is &#39;1&#39;.&lt;/li&gt; &lt;li&gt;Reset Day must be a number 0 - 6. 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday (day of week). Default is &#39;0&#39;.&lt;/li&gt; &lt;li&gt;Reset time must be &lt;b&gt;hours:minutes&lt;/b&gt; in 24 hours format e.g. 01:30, 10:30, 15:30, 23:15.&lt;/li&gt; &lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_UpdateLeaderboard_ByLeaderboardCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetLeaderboardConfigResp,
      AxiosError<ApiError>,
      SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }
    >,
    'mutationKey'
  >,
  callback?: (data: GetLeaderboardConfigResp) => void
): UseMutationResult<
  GetLeaderboardConfigResp,
  AxiosError<ApiError>,
  SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string; data: UpdateLeaderboardConfigReq }) => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLeaderboard_ByLeaderboardCode(input.leaderboardCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
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
 *    queryKey: [Key_LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationAdminApi_DeleteHard_ByLeaderboardCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode: string }) => {
    const response = await LeaderboardConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteHard_ByLeaderboardCode(input.leaderboardCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
