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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { SchedulesAdminApi } from '../SchedulesAdminApi.js'

import { ListScheduleByGoalResponse } from '../../generated-definitions/ListScheduleByGoalResponse.js'
import { ListSchedulesResponse } from '../../generated-definitions/ListSchedulesResponse.js'

export enum Key_SchedulesAdmin {
  Schedules_ByChallengeCode = 'Challenge.SchedulesAdmin.Schedules_ByChallengeCode',
  Schedules_ByChallengeCode_ByCode = 'Challenge.SchedulesAdmin.Schedules_ByChallengeCode_ByCode'
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given challenge for specific user. To query schedules prior to specific date time, use dateTime parameter.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SchedulesAdmin.Schedules_ByChallengeCode, input]
 * }
 * ```
 */
export const useSchedulesAdminApi_GetSchedules_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    challengeCode: string
    queryParams?: { dateTime?: string | null; limit?: number; offset?: number; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<ListSchedulesResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListSchedulesResponse>) => void
): UseQueryResult<ListSchedulesResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useSchedulesAdminApi_GetSchedules_ByChallengeCode>[1]) => async () => {
    const response = await SchedulesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSchedules_ByChallengeCode(input.challengeCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListSchedulesResponse, AxiosError<ApiError>>({
    queryKey: [Key_SchedulesAdmin.Schedules_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given goal in a challenge for specific user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SchedulesAdmin.Schedules_ByChallengeCode_ByCode, input]
 * }
 * ```
 */
export const useSchedulesAdminApi_GetSchedules_ByChallengeCode_ByCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    challengeCode: string
    code: string
    queryParams?: { limit?: number; offset?: number; userId?: string | null }
  },
  options?: Omit<UseQueryOptions<ListScheduleByGoalResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListScheduleByGoalResponse>) => void
): UseQueryResult<ListScheduleByGoalResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useSchedulesAdminApi_GetSchedules_ByChallengeCode_ByCode>[1]) => async () => {
      const response = await SchedulesAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getSchedules_ByChallengeCode_ByCode(input.challengeCode, input.code, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListScheduleByGoalResponse, AxiosError<ApiError>>({
    queryKey: [Key_SchedulesAdmin.Schedules_ByChallengeCode_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
