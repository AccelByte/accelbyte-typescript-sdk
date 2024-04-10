/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CreateGoalRequest } from '../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../generated-definitions/GetGoalsResponse.js'
import { GoalConfigurationAdmin$ } from './endpoints/GoalConfigurationAdmin$.js'
import { GoalResponse } from '../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../generated-definitions/UpdateGoalRequest.js'

export function GoalConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<GetGoalsResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getGoals_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE]&lt;/li&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;code: unique within a challenge&lt;/li&gt;&lt;li&gt;name: name of the goal &lt;/li&gt;&lt;li&gt;description: text describing the goal (optional)&lt;/li&gt;&lt;li&gt;schedule: a time range that indicated the availability of a goal within a timeframe. used in fixed assignment rule&lt;/li&gt;&lt;li&gt;requirementGroups: list of conditions that conform with the goal progressions. &lt;/li&gt;&lt;li&gt;rewards: list of rewards that will be claimable once a goal is complete &lt;/li&gt;&lt;li&gt;tag: goal&#39;s labels&lt;/li&gt;&lt;li&gt;isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not&lt;/li&gt;&lt;/ul&gt;Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal.The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge.
   */
  async function createGoal_ByChallengeCode(challengeCode: string, data: CreateGoalRequest): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createGoal_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<unknown> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;name: name of the goal &lt;/li&gt;&lt;li&gt;description: text describing the goal (optional)&lt;/li&gt;&lt;li&gt;schedule (optional): a time range that indicated the availability of a goal within a timeframe. used in fixed assignment rule&lt;/li&gt;&lt;li&gt;requirementGroups: list of conditions that conform with the goal progressions. &lt;/li&gt;&lt;li&gt;rewards: list of rewards that will be claimable once a goal is complete &lt;/li&gt;&lt;li&gt;tag: goal&#39;s labels&lt;/li&gt;&lt;li&gt;isActive (optional): when goal is in a schedule, isActive determine whether goal is active to progress or not&lt;/li&gt;&lt;/ul&gt;Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal.The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge.
   */
  async function updateGoal_ByChallengeCode_ByCode(challengeCode: string, code: string, data: UpdateGoalRequest): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateGoal_ByChallengeCode_ByCode(challengeCode, code, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getGoals_ByChallengeCode,
    createGoal_ByChallengeCode,
    deleteGoal_ByChallengeCode_ByCode,
    getGoal_ByChallengeCode_ByCode,
    updateGoal_ByChallengeCode_ByCode
  }
}
