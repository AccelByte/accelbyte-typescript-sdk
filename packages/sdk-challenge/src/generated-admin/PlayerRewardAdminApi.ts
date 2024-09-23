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
import { ClaimUserRewardsByGoalCodeRequest } from '../generated-definitions/ClaimUserRewardsByGoalCodeRequest.js'
import { ClaimUserRewardsReq } from '../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../generated-definitions/UserRewardArray.js'
import { PlayerRewardAdmin$ } from './endpoints/PlayerRewardAdmin$.js'

export function PlayerRewardAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createUserRewardClaim(data: ClaimUsersRewardsRequest[]): Promise<AxiosResponse<ClaimUsersRewardsResponseArray>> {
    const $ = new PlayerRewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserRewardClaim(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRewards_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: 'CLAIMED' | 'UNCLAIMED' }
  ): Promise<AxiosResponse<ListUserRewardsResponse>> {
    const $ = new PlayerRewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewards_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRewardClaim_ByUserId(userId: string, data: ClaimUserRewardsReq): Promise<AxiosResponse<UserRewardArray>> {
    const $ = new PlayerRewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRewardClaim_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRewardClaim_ByUserId_ByChallengeCode(
    userId: string,
    challengeCode: string,
    data: ClaimUserRewardsByGoalCodeRequest
  ): Promise<AxiosResponse<UserRewardArray>> {
    const $ = new PlayerRewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRewardClaim_ByUserId_ByChallengeCode(userId, challengeCode, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
     */
    createUserRewardClaim,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [READ]&lt;/li&gt;&lt;/ul&gt;
     */
    getRewards_ByUserId,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
     */
    createRewardClaim_ByUserId,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:REWARD [UPDATE]&lt;/li&gt;&lt;/ul&gt;
     */
    createRewardClaim_ByUserId_ByChallengeCode
  }
}
