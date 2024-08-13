/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CreateGoalRequest } from '../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../generated-definitions/GetGoalsResponse.js'
import { GoalResponse } from '../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../generated-definitions/UpdateGoalRequest.js'
import { GoalConfigurationAdmin$ } from './endpoints/GoalConfigurationAdmin$.js'

export function GoalConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<GetGoalsResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGoals_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE]&lt;/li&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;code: unique within a challenge.&lt;/li&gt;&lt;li&gt;name: name of the goal.&lt;/li&gt;&lt;li&gt;description: text describing the goal (optional).&lt;/li&gt;&lt;li&gt;schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case.&lt;/li&gt;&lt;li&gt;requirementGroups: list of conditions that conform with the goal progressions.&lt;ul&gt;&lt;li&gt;operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true.&lt;/li&gt;&lt;li&gt;predicates: list of progression parameters to be tracked.&lt;ul&gt;&lt;li&gt;parameterType: the type of parameter for challenge to be progressed with. the available options are:&lt;ul&gt;&lt;li&gt; STATISTIC: progress by user statistic item value.&lt;/li&gt;&lt;li&gt; STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included.&lt;/li&gt;&lt;li&gt; ACHIEVEMENT: progress by user achievement.&lt;/li&gt;&lt;li&gt; USERACCOUNT: progress by user account event.&lt;/li&gt;&lt;li&gt; ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;parameterName: the name of the parameter for challenge to be progressed with.&lt;ul&gt;&lt;li&gt; STATISTIC: refers to stat code.&lt;/li&gt;&lt;li&gt; STATISTIC_CYCLE: refers to stat code with statCycleId must be included.&lt;/li&gt;&lt;li&gt; ACHIEVEMENT: refers to achievement code.&lt;/li&gt;&lt;li&gt; USERACCOUNT: one of the user account event. current possible values are (userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded,thirdPartyAccountCreated).&lt;/li&gt;&lt;li&gt; ENTITLEMENT: ecommerce store&#39;s item SKU.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;matcher: the comparison operator used to compare the curent value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL.&lt;/li&gt;&lt;li&gt;targetValue: the target number to be reached by the parameter.&lt;/li&gt;&lt;li&gt;statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional).&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;rewards: list of rewards that will be claimable once a goal is complete.&lt;/li&gt;&lt;li&gt;tag: goal&#39;s labels.&lt;/li&gt;&lt;li&gt;isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not.&lt;/li&gt;&lt;/ul&gt;Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal.The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge.Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX
   */
  async function createGoal_ByChallengeCode(challengeCode: string, data: CreateGoalRequest): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createGoal_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<unknown> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getGoal_ByChallengeCode_ByCode(challengeCode: string, code: string): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getGoal_ByChallengeCode_ByCode(challengeCode, code)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;name: name of the goal.&lt;/li&gt;&lt;li&gt;description: text describing the goal (optional).&lt;/li&gt;&lt;li&gt;schedule: a time range that indicated the availability of a goal within a timeframe. Used in FIXED assignment rule, this will be required in that case.&lt;/li&gt;&lt;li&gt;requirementGroups: list of conditions that conform with the goal progressions.&lt;ul&gt;&lt;li&gt;operator: logical operator used to validate the completion of a goal. a goal is considered complete once complete predicates operated with operator result in true.&lt;/li&gt;&lt;li&gt;predicates: list of progression parameters to be tracked.&lt;ul&gt;&lt;li&gt;parameterType: the type of parameter for challenge to be progressed with. the available options are:&lt;ul&gt;&lt;li&gt; STATISTIC: progress by user statistic item value.&lt;/li&gt;&lt;li&gt; STATISTIC_CYCLE: progress user statistic cycle item value. statCycleId must be included.&lt;/li&gt;&lt;li&gt; ACHIEVEMENT: progress by user achievement.&lt;/li&gt;&lt;li&gt; USERACCOUNT: progress by user account event.&lt;/li&gt;&lt;li&gt; ENTITLEMENT: progress by user&#39;s item entitlement ownership. Supported item types are APP, CODE, INGAMEITEM, LOOTBOX, MEDIA, and OPTIONBOX.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;parameterName: the name of the parameter for challenge to be progressed with.&lt;ul&gt;&lt;li&gt; STATISTIC: refers to stat code.&lt;/li&gt;&lt;li&gt; STATISTIC_CYCLE: refers to stat code with statCycleId must be included.&lt;/li&gt;&lt;li&gt; ACHIEVEMENT: refers to achievement code.&lt;/li&gt;&lt;li&gt; USERACCOUNT: one of the user account event. Current possible values are (userAccountCreated, gameUserAccountCreated, userAccountVerified, userAccountLinked, userAccountUpgraded,thirdPartyAccountCreated).&lt;/li&gt;&lt;li&gt; ENTITLEMENT: ecommerce store&#39;s item SKU.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;matcher: the comparison operator used to compare the curent value of a parameter and targetValue to validate the completion of a predicate. Possible values are EQUAL, LESS_THAN, GREATER_THAN, LESS_THAN_EQUAL, and GREATER_THAN_EQUAL.&lt;/li&gt;&lt;li&gt;targetValue: the target number to be reached by the parameter.&lt;/li&gt;&lt;li&gt;statCycleId: specify the statCycleId used to track statistic value in a cycle with STATISTIC_CYCLE parameterType (optional).&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;rewards: list of rewards that will be claimable once a goal is complete.&lt;/li&gt;&lt;li&gt;tag: goal&#39;s labels.&lt;/li&gt;&lt;li&gt;isActive: when goal is in a schedule, isActive determine whether goal is active to progress or not (optional).&lt;/li&gt;&lt;/ul&gt;Goal describe set of requirements that need to be fulfilled by players in order to complete it and describe what is the rewards given to player when they complete the goal.The requirement will have target value and a operator that will evaluate that against an observable player’s attribute (e.g. statistic, entitlement). Goal belongs to a challenge.Supported item type for ENTITLEMENT reward type: APP, BUNDLE, CODE, COINS, EXTENSION, INGAMEITEM, LOOTBOX, MEDIA, OPTIONBOX
   */
  async function updateGoal_ByChallengeCode_ByCode(challengeCode: string, code: string, data: UpdateGoalRequest): Promise<GoalResponse> {
    const $ = new GoalConfigurationAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
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
