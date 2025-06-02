/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ConditionMatchResult } from '../generated-definitions/ConditionMatchResult.js'
import { DeleteRewardConditionRequest } from '../generated-definitions/DeleteRewardConditionRequest.js'
import { EventPayload } from '../generated-definitions/EventPayload.js'
import { RewardCreate } from '../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../generated-definitions/RewardPagingSlicedResult.js'
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

  async function createReward(data: RewardCreate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReward(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRewardsExport(): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsExport()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRewardImport(
    data: { file?: File },
    queryParams: { replaceExisting: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRewardImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReward_ByRewardId(rewardId: string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReward_ByRewardId(rewardId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReward_ByRewardId(rewardId: string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReward_ByRewardId(rewardId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateReward_ByRewardId(rewardId: string, data: RewardUpdate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateReward_ByRewardId(rewardId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRewardsByCriteria(queryParams?: {
    eventTopic?: string | null
    limit?: number
    offset?: number
    sortBy?: string[]
  }): Promise<AxiosResponse<RewardPagingSlicedResult>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsByCriteria(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMatch_ByRewardId(rewardId: string, data: EventPayload): Promise<AxiosResponse<ConditionMatchResult>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMatch_ByRewardId(rewardId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRecord_ByRewardId(rewardId: string, data: DeleteRewardConditionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRecord_ByRewardId(rewardId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to create a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward data&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt;
     */
    createReward,
    /**
     * Export reward configurations for a given namespace into file. At current, only JSON file is supported.
     */
    getRewardsExport,
    /**
     * Import reward configurations for a given namespace from file. At current, only JSON file is supported.
     */
    createRewardImport,
    /**
     * This API is used to delete a reward by reward Id. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted reward data&lt;/li&gt;&lt;/ul&gt;
     */
    deleteReward_ByRewardId,
    /**
     * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt;
     */
    getReward_ByRewardId,
    /**
     * This API is used to update a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt;
     */
    updateReward_ByRewardId,
    /**
     * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
     */
    getRewardsByCriteria,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: match result&lt;/li&gt;&lt;/ul&gt;
     */
    updateMatch_ByRewardId,
    /**
     * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; This API is used to delete a reward condition record by reward Id and condition Name (optional). &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: 204 No Content &lt;/li&gt;&lt;/ul&gt;
     */
    deleteRecord_ByRewardId
  }
}
