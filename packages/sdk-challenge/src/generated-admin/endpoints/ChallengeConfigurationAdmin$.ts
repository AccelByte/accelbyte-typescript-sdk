/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getChallenges(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'INIT' | 'RETIRED' | 'TIED'
  }): Promise<Response<ListChallengeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListChallengeResponse, 'ListChallengeResponse')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE]&lt;/li&gt;&lt;/ul&gt;Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken.&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter&lt;/li&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;li&gt;repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge.&lt;/li&gt;&lt;li&gt;rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE)&lt;/li&gt;&lt;li&gt;activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment)&lt;/li&gt;&lt;li&gt;assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM)&lt;/li&gt;&lt;li&gt;goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY)&lt;/li&gt;&lt;li&gt;resetConfig: describe when rotation reset will happen (optional).&lt;ul&gt;&lt;li&gt;resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;randomizedPerRotation:&lt;ul&gt;&lt;li&gt;true: each goal will be randomly assigned to multiple periods&lt;/li&gt;&lt;li&gt;false: a goal will only be assigned to one period &lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;
   */
  createChallenge(data: CreateChallengeRequest): Promise<Response<ChallengeResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ChallengeResponse, 'ChallengeResponse')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;/ul&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;li&gt;repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge.&lt;/li&gt;&lt;li&gt;rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE)&lt;/li&gt;&lt;li&gt;activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment)&lt;/li&gt;&lt;li&gt;assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM)&lt;/li&gt;&lt;li&gt;goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY)&lt;/li&gt;&lt;li&gt;resetConfig: describe when rotation reset will happen (optional).&lt;ul&gt;&lt;li&gt;resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;randomizedPerRotation:&lt;ul&gt;&lt;li&gt;true: each goal will be randomly assigned to multiple periods&lt;/li&gt;&lt;li&gt;false: a goal will only be assigned to one period &lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;li&gt;This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS&lt;/li&gt;&lt;/ul&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED and RandomizePerRotation assigned with true.
   */
  createRandomize_ByChallengeCode(challengeCode: string): Promise<Response<ScheduleArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/challenges/{challengeCode}/randomize'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ScheduleArray, 'ScheduleArray')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;action: Update the challenge schedule. The available options are:&lt;/li&gt;&lt;ul&gt;&lt;li&gt;STOP: Ends the challenge, changing its status to RETIRED. This option supports all types of challenges.&lt;/li&gt;&lt;li&gt;ACCELERATE: Speeds up the challenge&#39;s end time. Note that this option does not apply to challenges with an &#39;endAfter&#39; value.&lt;/li&gt;&lt;/ul&gt;&lt;li&gt;endDate: The timestamp specifying when the challenge should end (required if the action is ACCELERATE).&lt;/li&gt;&lt;/ul&gt;
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
