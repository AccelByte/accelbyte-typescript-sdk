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
import { GoalConfigurationAdminApi } from '../GoalConfigurationAdminApi.js'

import { CreateGoalRequest } from '../../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../../generated-definitions/GetGoalsResponse.js'
import { GoalResponse } from '../../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../../generated-definitions/UpdateGoalRequest.js'

export enum Key_GoalConfigurationAdmin {
  Goals_ByChallengeCode = 'Challenge.GoalConfigurationAdmin.Goals_ByChallengeCode',
  Goal_ByChallengeCode = 'Challenge.GoalConfigurationAdmin.Goal_ByChallengeCode',
  Goal_ByChallengeCode_ByCode = 'Challenge.GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode'
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GoalConfigurationAdmin.Goals_ByChallengeCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_GetGoals_ByChallengeCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    challengeCode: string
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      tags?: string[]
    }
  },
  options?: Omit<UseQueryOptions<GetGoalsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetGoalsResponse>) => void
): UseQueryResult<GetGoalsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useGoalConfigurationAdminApi_GetGoals_ByChallengeCode>[1]) => async () => {
    const response = await GoalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getGoals_ByChallengeCode(input.challengeCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetGoalsResponse, AxiosError<ApiError>>({
    queryKey: [Key_GoalConfigurationAdmin.Goals_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Request body: - code: unique within a challenge. - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: refers to a specific event related to user accounts. The current possible events include: userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded, thirdPartyAccountCreated, userLoggedIn, userThirdPartyLoggedIn and fullAccount. - For the **userAccountLinked** event, **parameterName** will utilize **platformId** rather than the event name. This will be validated against the list of active third-party accounts configuration within the namespace, such as *psn*, *steam*, or *device*. - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the current value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not. Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX. Number of goals per challenge is **limited to 100 goals**.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_CreateGoal_ByChallengeCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string; data: CreateGoalRequest }>,
    'mutationKey'
  >,
  callback?: (data: GoalResponse) => void
): UseMutationResult<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string; data: CreateGoalRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; data: CreateGoalRequest }) => {
    const response = await GoalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createGoal_ByChallengeCode(input.challengeCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode],
    mutationFn,
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
 *    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_DeleteGoal_ByChallengeCode_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string; code: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode: string; code: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; code: string }) => {
    const response = await GoalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteGoal_ByChallengeCode_ByCode(input.challengeCode, input.code)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode],
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
 *    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_GetGoal_ByChallengeCode_ByCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { challengeCode: string; code: string },
  options?: Omit<UseQueryOptions<GoalResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GoalResponse>) => void
): UseQueryResult<GoalResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useGoalConfigurationAdminApi_GetGoal_ByChallengeCode_ByCode>[1]) => async () => {
      const response = await GoalConfigurationAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getGoal_ByChallengeCode_ByCode(input.challengeCode, input.code)
      callback && callback(response)
      return response.data
    }

  return useQuery<GoalResponse, AxiosError<ApiError>>({
    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: one of the user account event. Current possible values are (userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded,thirdPartyAccountCreated). - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the curent value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not (optional). Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_UpdateGoal_ByChallengeCode_ByCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GoalResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { challengeCode: string; code: string; data: UpdateGoalRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: GoalResponse) => void
): UseMutationResult<
  GoalResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { challengeCode: string; code: string; data: UpdateGoalRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode: string; code: string; data: UpdateGoalRequest }) => {
    const response = await GoalConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateGoal_ByChallengeCode_ByCode(input.challengeCode, input.code, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode],
    mutationFn,
    ...options
  })
}
