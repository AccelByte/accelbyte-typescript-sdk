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
import { ChallengeListApi } from '../ChallengeListApi.js'

import { GetGoalsResponse } from '../../generated-definitions/GetGoalsResponse.js'
import { ListChallengeResponse } from '../../generated-definitions/ListChallengeResponse.js'

export enum Key_ChallengeList {
  Challenges = 'Challenge.ChallengeList.Challenges',
  Goals_ByChallengeCode = 'Challenge.ChallengeList.Goals_ByChallengeCode'
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeList.Challenges, input]
 * }
 * ```
 */
export const useChallengeListApi_GetChallenges = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: 'INIT' | 'RETIRED' | 'TIED' }
  },
  options?: Omit<UseQueryOptions<ListChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListChallengeResponse>) => void
): UseQueryResult<ListChallengeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useChallengeListApi_GetChallenges>[1]) => async () => {
    const response = await ChallengeListApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getChallenges(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeList.Challenges, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeList.Goals_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeListApi_GetGoals_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { challengeCode: string; queryParams?: { limit?: number; offset?: number; tags?: string[] } },
  options?: Omit<UseQueryOptions<GetGoalsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGoalsResponse>) => void
): UseQueryResult<GetGoalsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useChallengeListApi_GetGoals_ByChallengeCode>[1]) => async () => {
    const response = await ChallengeListApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getGoals_ByChallengeCode(
      input.challengeCode,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGoalsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeList.Goals_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
