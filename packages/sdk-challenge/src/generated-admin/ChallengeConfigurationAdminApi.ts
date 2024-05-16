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
import { ChallengeConfigurationAdmin$ } from './endpoints/ChallengeConfigurationAdmin$.js'
import { ChallengeResponse } from '../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../generated-definitions/UpdateChallengeRequest.js'

export function ChallengeConfigurationAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChallenges(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'INIT' | 'RETIRED' | 'TIED'
  }): Promise<ListChallengeResponse> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getChallenges(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE]&lt;/li&gt;&lt;/ul&gt;Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken.&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter&lt;/li&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;li&gt;repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge.&lt;/li&gt;&lt;li&gt;rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE)&lt;/li&gt;&lt;li&gt;activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment)&lt;/li&gt;&lt;li&gt;assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED)&lt;/li&gt;&lt;li&gt;goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY)&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;
   */
  async function createChallenge(data: CreateChallengeRequest): Promise<ChallengeResponse> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createChallenge(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteChallenge_ByChallengeCode(challengeCode: string): Promise<unknown> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteChallenge_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getChallenge_ByChallengeCode(challengeCode: string): Promise<ChallengeResponse> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getChallenge_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;/ul&gt;&lt;/p&gt;
   */
  async function updateChallenge_ByChallengeCode(challengeCode: string, data: UpdateChallengeRequest): Promise<ChallengeResponse> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateChallenge_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;li&gt;This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS&lt;/li&gt;&lt;/ul&gt;
   */
  async function deleteTied_ByChallengeCode(challengeCode: string): Promise<unknown> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteTied_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  async function getPeriods_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<ListPeriodsResponse> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPeriods_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED.
   */
  async function createRandomize_ByChallengeCode(challengeCode: string): Promise<ScheduleArray> {
    const $ = new ChallengeConfigurationAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createRandomize_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getChallenges,
    createChallenge,
    deleteChallenge_ByChallengeCode,
    getChallenge_ByChallengeCode,
    updateChallenge_ByChallengeCode,
    deleteTied_ByChallengeCode,
    getPeriods_ByChallengeCode,
    createRandomize_ByChallengeCode
  }
}
