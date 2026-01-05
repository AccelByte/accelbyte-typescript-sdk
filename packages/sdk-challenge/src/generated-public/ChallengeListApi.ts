/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { GetGoalsResponse } from '../generated-definitions/GetGoalsResponse.js'
import { ListChallengeResponse } from '../generated-definitions/ListChallengeResponse.js'
import { ChallengeList$ } from './endpoints/ChallengeList$.js'

export function ChallengeListApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
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
    const $ = new ChallengeList$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallenges(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGoals_ByChallengeCode(
    challengeCode: string,
    queryParams?: {
      limit?: number
      offset?: number
      sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
      tags?: string[]
    }
  ): Promise<AxiosResponse<GetGoalsResponse>> {
    const $ = new ChallengeList$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGoals_ByChallengeCode(challengeCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * - Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getChallenges,
    /**
     * - Required permission: NAMESPACE:{namespace}:CHALLENGE [READ]
     */
    getGoals_ByChallengeCode
  }
}
