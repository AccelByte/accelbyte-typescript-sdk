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
import { GetGoalsResponse } from '../../generated-definitions/GetGoalsResponse.js'
import { ListChallengeResponse } from '../../generated-definitions/ListChallengeResponse.js'

export class ChallengeList$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getChallenges(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: 'INIT' | 'RETIRED' | 'TIED'
  }): Promise<Response<ListChallengeResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/challenges'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListChallengeResponse, 'ListChallengeResponse')
  }
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: { limit?: number; offset?: number; tags?: string[] }
  ): Promise<Response<GetGoalsResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/challenges/{challengeCode}/goals'
      .replace('{namespace}', this.namespace)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetGoalsResponse, 'GetGoalsResponse')
  }
}
