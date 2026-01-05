/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ChallengeResponse } from '../../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../../generated-definitions/UpdateChallengeRequest.js'
import { UpdateChallengeScheduleRequest } from '../../generated-definitions/UpdateChallengeScheduleRequest.js'

export class ChallengeConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getChallenges(queryParams?: {
    keyword?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    status?: 'INIT' | 'RETIRED' | 'TIED'
    tags?: string[]
  }): Promise<Response<ListChallengeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListChallengeResponse, 'ListChallengeResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE] Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken. #### Request body: - code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
   */
  createChallenge(data: CreateChallengeRequest): Promise<Response<ChallengeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChallengeResponse, 'ChallengeResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ] The endpoint provides you an access to list of currently active challenges in which the player is participating
   */
  getChallengeUser_ByUserId(userId: string, queryParams?: { limit?: number; offset?: number }): Promise<Response<ListChallengeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/users/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListChallengeResponse, 'ListChallengeResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]
   */
  deleteChallenge_ByChallengeCode(challengeCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getChallenge_ByChallengeCode(challengeCode: string): Promise<Response<ChallengeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChallengeResponse, 'ChallengeResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] Request body: - name: name of the challenge - description: text describing about the challenge (optional) - startDate: timestamp of when the challenge is started - endDate: timestamp of when the challenge is ended (optional) - endAfter: describe number of period challenge will be retired after (optional). To configure challenge that never end, leave the endDate and endAfter field null/empty. - repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge. - rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE) - activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment) - assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM) - goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY) - resetConfig: describe when rotation reset will happen (optional). - resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34; - resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation. - resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation. - randomizedPerRotation: - true: each goal will be randomly assigned to multiple periods - false: a goal will only be assigned to one period - tags: challenge&#39;s labels.
   */
  updateChallenge_ByChallengeCode(challengeCode: string, data: UpdateChallengeRequest): Promise<Response<ChallengeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChallengeResponse, 'ChallengeResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE] - This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS
   */
  deleteTied_ByChallengeCode(challengeCode: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
   */
  getPeriods_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<ListPeriodsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/periods'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListPeriodsResponse, 'ListPeriodsResponse')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED and RandomizePerRotation assigned with true.
   */
  updateRandomize_ByChallengeCode(challengeCode: string): Promise<Response<ScheduleArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/randomize'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ScheduleArray, 'ScheduleArray')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE] ### Request body: - action: Update the challenge schedule. The available options are: - STOP: Ends the challenge, changing its status to RETIRED. This option supports all types of challenges. - ACCELERATE: Speeds up the challenge&#39;s end time. Note that this option does not apply to challenges with an &#39;endAfter&#39; value. - endDate: The timestamp specifying when the challenge should end (required if the action is ACCELERATE).
   */
  updateTiedSchedule_ByChallengeCode(challengeCode: string, data: UpdateChallengeScheduleRequest): Promise<Response<ChallengeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/tied/schedule'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChallengeResponse, 'ChallengeResponse')
  }
}
