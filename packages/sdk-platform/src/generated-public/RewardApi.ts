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
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../generated-definitions/RewardPagingSlicedResult.js'
import { Reward$ } from './endpoints/Reward$.js'

export function RewardApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRewardsByCode(queryParams: { rewardCode: string | null }): Promise<AxiosResponse<RewardInfo>> {
    const $ = new Reward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsByCode(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReward_ByRewardId(rewardId: string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new Reward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReward_ByRewardId(rewardId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    limit?: number
    offset?: number
    sortBy?: string[]
  }): Promise<AxiosResponse<RewardPagingSlicedResult>> {
    const $ = new Reward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to get reward by reward code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
     */
    getRewardsByCode,
    /**
     * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
     */
    getReward_ByRewardId,
    /**
     * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
     */
    getRewardsByCriteria
  }
}
