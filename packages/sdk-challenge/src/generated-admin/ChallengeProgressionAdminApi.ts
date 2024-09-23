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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { EvaluatePlayerProgressionRequest } from '../generated-definitions/EvaluatePlayerProgressionRequest.js'
import { UserProgressionResponse } from '../generated-definitions/UserProgressionResponse.js'
import { ChallengeProgressionAdmin$ } from './endpoints/ChallengeProgressionAdmin$.js'

export function ChallengeProgressionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createProgresEvaluate(data: EvaluatePlayerProgressionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeProgressionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProgresEvaluate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getProgres_ByUserId_ByChallengeCode(
    userId: string,
    challengeCode: string,
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<AxiosResponse<UserProgressionResponse>> {
    const $ = new ChallengeProgressionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProgres_ByUserId_ByChallengeCode(userId, challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;li&gt;Limited up to 10 users per request&lt;/li&gt;&lt;/ul&gt;
     */
    createProgresEvaluate,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
     */
    getProgres_ByUserId_ByChallengeCode
  }
}
