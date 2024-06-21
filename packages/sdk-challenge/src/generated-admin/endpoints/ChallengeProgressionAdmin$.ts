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
import { EvaluatePlayerProgressionRequest } from '../../generated-definitions/EvaluatePlayerProgressionRequest.js'

export class ChallengeProgressionAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
   */
  createProgresEvaluate(data: EvaluatePlayerProgressionRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/challenge/v1/admin/namespaces/{namespace}/progress/evaluate'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
