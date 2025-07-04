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
import { ClaimUserRewardsByGoalCodeRequest } from '../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../generated-definitions/ClaimUserRewardsReq.js'
import { ListUserRewardsResponse } from '../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../generated-definitions/UserRewardArray.js'
import { PlayerReward$ } from './endpoints/PlayerReward$.js'

export function PlayerRewardApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersMeRewards(queryParams?: {
    challengeCode?: string | null
    goalProgressionId?: string | null
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    status?: 'CLAIMED' | 'UNCLAIMED'
  }): Promise<AxiosResponse<ListUserRewardsResponse>> {
    const $ = new PlayerReward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeRewards(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUserMeRewardClaim(data: ClaimUserRewardsReq): Promise<AxiosResponse<UserRewardArray>> {
    const $ = new PlayerReward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUserMeRewardClaim(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRewardClaimMeUser_ByChallengeCode(
    challengeCode: string,
    data: ClaimUserRewardsByGoalCodeRequest
  ): Promise<AxiosResponse<UserRewardArray>> {
    const $ = new PlayerReward$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRewardClaimMeUser_ByChallengeCode(challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]
     */
    getUsersMeRewards,
    /**
     * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
     */
    updateUserMeRewardClaim,
    /**
     * - Required permission: NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]
     */
    updateRewardClaimMeUser_ByChallengeCode
  }
}
