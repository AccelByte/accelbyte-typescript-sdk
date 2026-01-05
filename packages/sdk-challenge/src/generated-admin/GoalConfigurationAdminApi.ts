/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateGoalRequest } from '../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../generated-definitions/GetGoalsResponse.js'
import { GoalResponse } from '../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../generated-definitions/UpdateGoalRequest.js'
import { GoalConfigurationAdmin$ } from './endpoints/GoalConfigurationAdmin$.js'

export function GoalConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      tags?: string[]
    }
  ): Promise<AxiosResponse<GetGoalsResponse>> {
    const $ = new GoalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGoals_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGoal_ByChallengeCode(challengeCode: string, data: CreateGoalRequest): Promise<AxiosResponse<GoalResponse>> {
    const $ = new GoalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGoal_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<AxiosResponse<unknown>> {
    const $ = new GoalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<AxiosResponse<GoalResponse>> {
    const $ = new GoalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGoal_ByChallengeCode_ByCode(
    challengeCode: string,
    code: string,
    data: UpdateGoalRequest
  ): Promise<AxiosResponse<GoalResponse>> {
    const $ = new GoalConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGoal_ByChallengeCode_ByCode(challengeCode, code, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getGoals_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Request body: - code: unique within a challenge. - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: refers to a specific event related to user accounts. The current possible events include: userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded, thirdPartyAccountCreated, userLoggedIn, userThirdPartyLoggedIn and fullAccount. - For the **userAccountLinked** event, **parameterName** will utilize **platformId** rather than the event name. This will be validated against the list of active third-party accounts configuration within the namespace, such as *psn*, *steam*, or *device*. - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the current value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not. Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX. Number of goals per challenge is **limited to 100 goals**.
     */
    createGoal_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]
     */
    deleteGoal_ByChallengeCode_ByCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getGoal_ByChallengeCode_ByCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: one of the user account event. Current possible values are (userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded,thirdPartyAccountCreated). - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the curent value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not (optional). Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX
     */
    updateGoal_ByChallengeCode_ByCode
  }
}
