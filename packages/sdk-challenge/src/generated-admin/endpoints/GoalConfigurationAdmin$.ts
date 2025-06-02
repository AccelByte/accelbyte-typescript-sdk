/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateGoalRequest } from '../../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../../generated-definitions/GetGoalsResponse.js'
import { GoalResponse } from '../../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../../generated-definitions/UpdateGoalRequest.js'

export class GoalConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      tags?: string[]
    }
  ): Promise<Response<GetGoalsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetGoalsResponse, 'GetGoalsResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Request body: - code: unique within a challenge. - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: refers to a specific event related to user accounts. The current possible events include: userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded, thirdPartyAccountCreated, userLoggedIn, userThirdPartyLoggedIn and fullAccount. - For the **userAccountLinked** event, **parameterName** will utilize **platformId** rather than the event name. This will be validated against the list of active third-party accounts configuration within the namespace, such as *psn*, *steam*, or *device*. - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the current value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not. Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX. Number of goals per challenge is **limited to 100 goals**.
   */
  createGoal_ByChallengeCode(challengeCode: string, data: CreateGoalRequest): Promise<Response<GoalResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoalResponse, 'GoalResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]
   */
  deleteGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<Response<GoalResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoalResponse, 'GoalResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - name: name of the goal. - description: text describing the goal (optional). - schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case. - requirementGroups: contains array of objects consisting of operator and predicates attribute. When requirements evaluation happened, each item&#39;s predicates will be evaluated first, by operating the predicates with given operator. After all items evaluated, the results of the evaluation on each item then will be logically evaluated using OR operator. - operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true. - predicates: list of progression parameters to be tracked. - parameterType: the type of parameter for challenge to be progressed with. the available options are: - STATISTIC: progress by user statistic item value. - STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included. - ACHIEVEMENT: progress by user achievement. - USERACCOUNT: progress by user account event. - ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX. - parameterName: the name of the parameter for challenge to be progressed with. - STATISTIC: refers to stat code. - STATISTIC_CYCLE: refers to stat code with statCycleId must be included. - ACHIEVEMENT: refers to achievement code. - USERACCOUNT: one of the user account event. Current possible values are (userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded,thirdPartyAccountCreated). - ENTITLEMENT: ecommerce store&#39;s item SKU. - matcher: the comparison operator used to compare the curent value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL. - targetValue: the target number to be reached by the parameter. - statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional). - rewards: list of rewards that will be claimable once a goal is complete. - tags: goal&#39;s labels. - isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not (optional). Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal. The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge. Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX
   */
  updateGoal_ByChallengeCode_ByCode(challengeCode: string, code: string, data: UpdateGoalRequest): Promise<Response<GoalResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GoalResponse, 'GoalResponse')
  }
}
