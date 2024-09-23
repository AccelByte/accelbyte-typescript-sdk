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
import { UserProgressionResponse } from '../generated-definitions/UserProgressionResponse.js'
import { ChallengeProgression$ } from './endpoints/ChallengeProgression$.js'

export function ChallengeProgressionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createUserMeProgresEvaluate(): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeProgression$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeProgresEvaluate()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUserMeProgres_ByChallengeCode(
    challengeCode: string,
    queryParams?: { dateTime?: string | null; goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<AxiosResponse<UserProgressionResponse>> {
    const $ = new ChallengeProgression$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUserMeProgres_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getIndexMeUser_ByChallengeCode_ByIndex(
    challengeCode: string,
    index: number,
    queryParams?: { goalCode?: string | null; limit?: number; offset?: number; tags?: string[] }
  ): Promise<AxiosResponse<UserProgressionResponse>> {
    const $ = new ChallengeProgression$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIndexMeUser_ByChallengeCode_ByIndex(challengeCode, index, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;/ul&gt;
     */
    createUserMeProgresEvaluate,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
     */
    getUserMeProgres_ByChallengeCode,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [READ]&lt;/li&gt;&lt;/ul&gt;
     */
    getIndexMeUser_ByChallengeCode_ByIndex
  }
}
