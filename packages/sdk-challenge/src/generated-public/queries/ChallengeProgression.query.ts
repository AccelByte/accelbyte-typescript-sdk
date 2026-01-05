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
import { ChallengeProgressionApi } from '../ChallengeProgressionApi.js'

import { UserProgressionResponse } from '../../generated-definitions/UserProgressionResponse.js'

export enum Key_ChallengeProgression {
  UserMeProgresEvaluate = 'Challenge.ChallengeProgression.UserMeProgresEvaluate',
  UserMeProgres_ByChallengeCode = 'Challenge.ChallengeProgression.UserMeProgres_ByChallengeCode',
  IndexMeUser_ByChallengeCode_ByIndex = 'Challenge.ChallengeProgression.IndexMeUser_ByChallengeCode_ByIndex'
}

/**
 * - Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeProgression.UserMeProgresEvaluate, input]
 * }
 * ```
 */
export const useChallengeProgressionApi_UpdateUserMeProgresEvaluateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ChallengeProgressionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateUserMeProgresEvaluate()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeProgression.UserMeProgresEvaluate],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeProgression.UserMeProgres_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeProgressionApi_GetUserMeProgres_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    challengeCode: string
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<UserProgressionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProgressionResponse>) => void
): UseQueryResult<UserProgressionResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeProgressionApi_GetUserMeProgres_ByChallengeCode>[1]) => async () => {
      const response = await ChallengeProgressionApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUserMeProgres_ByChallengeCode(input.challengeCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserProgressionResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeProgression.UserMeProgres_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeProgression.IndexMeUser_ByChallengeCode_ByIndex, input]
 * }
 * ```
 */
export const useChallengeProgressionApi_GetIndexMeUser_ByChallengeCode_ByIndex = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    challengeCode: string
    index: number
    queryParams?: { goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<UserProgressionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProgressionResponse>) => void
): UseQueryResult<UserProgressionResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeProgressionApi_GetIndexMeUser_ByChallengeCode_ByIndex>[1]) => async () => {
      const response = await ChallengeProgressionApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getIndexMeUser_ByChallengeCode_ByIndex(input.challengeCode, input.index, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserProgressionResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeProgression.IndexMeUser_ByChallengeCode_ByIndex, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
