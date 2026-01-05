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
import { ChallengeConfigurationAdminApi } from '../ChallengeConfigurationAdminApi.js'

import { ChallengeResponse } from '../../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../../generated-definitions/UpdateChallengeRequest.js'
import { UpdateChallengeScheduleRequest } from '../../generated-definitions/UpdateChallengeScheduleRequest.js'

export enum Key_ChallengeConfigurationAdmin {
  Challenges = 'Challenge.ChallengeConfigurationAdmin.Challenges',
  Challenge = 'Challenge.ChallengeConfigurationAdmin.Challenge',
  ChallengeUser_ByUserId = 'Challenge.ChallengeConfigurationAdmin.ChallengeUser_ByUserId',
  Challenge_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Challenge_ByChallengeCode',
  Tied_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Tied_ByChallengeCode',
  Periods_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Periods_ByChallengeCode',
  Randomize_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Randomize_ByChallengeCode',
  TiedSchedule_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.TiedSchedule_ByChallengeCode'
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Challenges, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_GetChallenges = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      keyword?: string | null
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      status?: 'INIT' | 'RETIRED' | 'TIED'
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<ListChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListChallengeResponse>) => void
): UseQueryResult<ListChallengeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useChallengeConfigurationAdminApi_GetChallenges>[1]) => async () => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChallenges(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Challenges, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken. #### Request body: - code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Challenge, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_CreateChallengeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateChallengeRequest }>,
    'mutationKey'
  >,
  callback?: (data: ChallengeResponse) => void
): UseMutationResult<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateChallengeRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateChallengeRequest }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createChallenge(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ] The endpoint provides you an access to list of currently active challenges in which the player is participating
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.ChallengeUser_ByUserId, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_GetChallengeUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListChallengeResponse>) => void
): UseQueryResult<ListChallengeResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeConfigurationAdminApi_GetChallengeUser_ByUserId>[1]) => async () => {
      const response = await ChallengeConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getChallengeUser_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.ChallengeUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_DeleteChallenge_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteChallenge_ByChallengeCode(input.challengeCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_GetChallenge_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { challengeCode: string },
  options?: Omit<UseQueryOptions<ChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ChallengeResponse>) => void
): UseQueryResult<ChallengeResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeConfigurationAdminApi_GetChallenge_ByChallengeCode>[1]) => async () => {
      const response = await ChallengeConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getChallenge_ByChallengeCode(input.challengeCode)
      callback && callback(response)
      return response.data
    }

  return useQuery<ChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] Request body: - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_UpdateChallenge_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ChallengeResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ChallengeResponse) => void
): UseMutationResult<
  ChallengeResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeRequest }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateChallenge_ByChallengeCode(input.challengeCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE] - This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Tied_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_DeleteTied_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteTied_ByChallengeCode(input.challengeCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Tied_ByChallengeCode],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Periods_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_GetPeriods_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { challengeCode: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListPeriodsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListPeriodsResponse>) => void
): UseQueryResult<ListPeriodsResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useChallengeConfigurationAdminApi_GetPeriods_ByChallengeCode>[1]) => async () => {
      const response = await ChallengeConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPeriods_ByChallengeCode(input.challengeCode, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ListPeriodsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Periods_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED and RandomizePerRotation assigned with true.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.Randomize_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_UpdateRandomize_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<ScheduleArray, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }>, 'mutationKey'>,
  callback?: (data: ScheduleArray) => void
): UseMutationResult<ScheduleArray, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRandomize_ByChallengeCode(input.challengeCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Randomize_ByChallengeCode],
    mutationFn,
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - action: Update the challenge schedule. The available options are: - STOP: Ends the challenge, changing its status to RETIRED. This option supports all types of challenges. - ACCELERATE: Speeds up the challenge&#39;s end time. Note that this option does not apply to challenges with an &#39;endAfter&#39; value. - endDate: The timestamp specifying when the challenge should end (required if the action is ACCELERATE).
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ChallengeConfigurationAdmin.TiedSchedule_ByChallengeCode, input]
 * }
 * ```
 */
export const useChallengeConfigurationAdminApi_UpdateTiedSchedule_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ChallengeResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeScheduleRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ChallengeResponse) => void
): UseMutationResult<
  ChallengeResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeScheduleRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; data: UpdateChallengeScheduleRequest }) => {
    const response = await ChallengeConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateTiedSchedule_ByChallengeCode(input.challengeCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.TiedSchedule_ByChallengeCode],
    mutationFn,
    ...options
  })
}
