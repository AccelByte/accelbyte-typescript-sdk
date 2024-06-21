/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { UserProgressionResponse } from '../../generated-definitions/UserProgressionResponse.js'

export class ChallengeProgression$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createUserMeProgresEvaluate(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/progress/evaluate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
   */
  getUserMeProgres_ByChallengeCode(
    challengeCode: string,
    queryParams?: { goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<IResponse<UserProgressionResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/challenge/v1/public/namespaces/{namespace}/users/me/progress/{challengeCode}'
      .replace('{namespace}', this.namespace)
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
