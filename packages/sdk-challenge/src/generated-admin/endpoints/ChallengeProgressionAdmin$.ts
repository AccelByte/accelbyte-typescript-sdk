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
import { EvaluatePlayerProgressionRequest } from '../../generated-definitions/EvaluatePlayerProgressionRequest.js'
import { UserProgressionResponse } from '../../generated-definitions/UserProgressionResponse.js'

export class ChallengeProgressionAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE] - Limited up to 10 users per request
   */
  updateProgresEvaluate(data: EvaluatePlayerProgressionRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/progress/evaluate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]
   */
  getProgres_ByUserId_ByChallengeCode(
    userId: string,
    challengeCode: string,
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<Response<UserProgressionResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/users/{userId}/progress/{challengeCode}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{challengeCode}', challengeCode)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserProgressionResponse,
      'UserProgressionResponse'
    )
  }
}
