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
import { ListScheduleByGoalResponse } from '../../generated-definitions/ListScheduleByGoalResponse.js'
import { ListSchedulesResponse } from '../../generated-definitions/ListSchedulesResponse.js'

export class Schedules$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given challenge for specific user. To query schedules prior to specific date time, use dateTime parameter.
   */
  getSchedules_ByChallengeCode(
    challengeCode: string,
    queryParams?: { dateTime?: string | null; limit?: number; offset?: number }
  ): Promise<Response<ListSchedulesResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/schedules'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListSchedulesResponse, 'ListSchedulesResponse')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;List schedules of given goal in a challenge for specific user.
   */
  getSchedules_ByChallengeCode_ByCode(
    challengeCode: string,
    code: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<ListScheduleByGoalResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals/{code}/schedules'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
      .replace('{code}', code)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListScheduleByGoalResponse,
      'ListScheduleByGoalResponse'
    )
  }
}
