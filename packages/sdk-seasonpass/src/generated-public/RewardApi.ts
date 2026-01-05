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
import { ClaimableRewards } from '../generated-definitions/ClaimableRewards.js'
import { UserRewardClaim } from '../generated-definitions/UserRewardClaim.js'
import { Reward$ } from './endpoints/Reward$.js'

export function RewardApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createSeasonCurrentReward_ByUserId(userId: string, data: UserRewardClaim): Promise<AxiosResponse<ClaimableRewards>> {
    const $ = new Reward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentReward_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createSeasonCurrentRewardBulk_ByUserId(userId: string): Promise<AxiosResponse<ClaimableRewards>> {
    const $ = new Reward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentRewardBulk_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to claim reward, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    createSeasonCurrentReward_ByUserId,
    /**
     * This API is used to bulk claim all remained rewards, season only located in non-publisher namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
     */
    createSeasonCurrentRewardBulk_ByUserId
  }
}
