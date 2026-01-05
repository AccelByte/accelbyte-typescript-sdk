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
import { ChallengeProgressionAdminApi } from '../ChallengeProgressionAdminApi.js'

import { EvaluatePlayerProgressionRequest } from '../../generated-definitions/EvaluatePlayerProgressionRequest.js'
import { UserProgressionResponse } from '../../generated-definitions/UserProgressionResponse.js'

export enum Key_ChallengeProgressionAdmin {
  ProgresEvaluate = 'Challenge.ChallengeProgressionAdmin.ProgresEvaluate',
  Progres_ByUserId_ByChallengeCode = 'Challenge.ChallengeProgressionAdmin.Progres_ByUserId_ByChallengeCode'
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE] - Limited up to 10 users per request
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeProgressionAdmin.ProgresEvaluate, input]
 * }
 * ```
 */
export const useChallengeProgressionAdminApi_UpdateProgresEvaluateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }) => {
    const response = await ChallengeProgressionAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateProgresEvaluate(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeProgressionAdmin.ProgresEvaluate],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeProgressionAdmin.Progres_ByUserId_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeProgressionAdminApi_GetProgres_ByUserId_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    challengeCode: string
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<UserProgressionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserProgressionResponse>) => void
): UseQueryResult<UserProgressionResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeProgressionAdminApi_GetProgres_ByUserId_ByChallengeCode>[1]) => async () => {
      const response = await ChallengeProgressionAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getProgres_ByUserId_ByChallengeCode(input.userId, input.challengeCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<UserProgressionResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeProgressionAdmin.Progres_ByUserId_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
