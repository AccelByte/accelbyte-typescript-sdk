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
import { RewardCreate } from '../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../generated-definitions/RewardUpdate.js'
import { RewardAdmin$ } from './endpoints/RewardAdmin$.js'

export function RewardAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRewards_BySeasonId(seasonId: string, queryParams?: { q?: string | null }): Promise<AxiosResponse<RewardInfoArray>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewards_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createReward_BySeasonId(seasonId: string, data: RewardCreate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReward_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchReward_BySeasonId_ByCode(seasonId: string, code: string, data: RewardUpdate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchReward_BySeasonId_ByCode(seasonId, code, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
     */
    getRewards_BySeasonId,
    /**
     * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
     */
    createReward_BySeasonId,
    /**
     * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
     */
    deleteReward_BySeasonId_ByCode,
    /**
     * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
     */
    getReward_BySeasonId_ByCode,
    /**
     * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
     */
    patchReward_BySeasonId_ByCode
  }
}
