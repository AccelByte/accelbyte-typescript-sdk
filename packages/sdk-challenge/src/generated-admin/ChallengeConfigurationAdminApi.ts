/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ChallengeResponse } from '../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../generated-definitions/UpdateChallengeRequest.js'
import { UpdateChallengeScheduleRequest } from '../generated-definitions/UpdateChallengeScheduleRequest.js'
import { ChallengeConfigurationAdmin$ } from './endpoints/ChallengeConfigurationAdmin$.js'

export function ChallengeConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getChallenges(queryParams?: {
    keyword?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    status?: 'INIT' | 'RETIRED' | 'TIED'
    tags?: string[]
  }): Promise<AxiosResponse<ListChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallenges(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createChallenge(data: CreateChallengeRequest): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChallenge(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChallengeUser_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<ListChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallengeUser_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteChallenge_ByChallengeCode(challengeCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChallenge_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getChallenge_ByChallengeCode(challengeCode: string): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallenge_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateChallenge_ByChallengeCode(
    challengeCode: string,
    data: UpdateChallengeRequest
  ): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChallenge_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTied_ByChallengeCode(challengeCode: string): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTied_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPeriods_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<ListPeriodsResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPeriods_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRandomize_ByChallengeCode(challengeCode: string): Promise<AxiosResponse<ScheduleArray>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRandomize_ByChallengeCode(challengeCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTiedSchedule_ByChallengeCode(
    challengeCode: string,
    data: UpdateChallengeScheduleRequest
  ): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTiedSchedule_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getChallenges,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken. #### Request body: - code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
     */
    createChallenge,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ] The endpoint provides you an access to list of currently active challenges in which the player is participating
     */
    getChallengeUser_ByUserId,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]
     */
    deleteChallenge_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getChallenge_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] Request body: - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
     */
    updateChallenge_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE] - This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS
     */
    deleteTied_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getPeriods_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED and RandomizePerRotation assigned with true.
     */
    updateRandomize_ByChallengeCode,
    /**
     * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - action: Update the challenge schedule. The available options are: - STOP: Ends the challenge, changing its status to RETIRED. This option supports all types of challenges. - ACCELERATE: Speeds up the challenge&#39;s end time. Note that this option does not apply to challenges with an &#39;endAfter&#39; value. - endDate: The timestamp specifying when the challenge should end (required if the action is ACCELERATE).
     */
    updateTiedSchedule_ByChallengeCode
  }
}
