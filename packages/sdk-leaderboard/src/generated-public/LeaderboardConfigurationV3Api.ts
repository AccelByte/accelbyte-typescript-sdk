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
import { GetAllLeaderboardConfigsPublicRespV3 } from '../generated-definitions/GetAllLeaderboardConfigsPublicRespV3.js'
import { GetLeaderboardConfigPublicRespV3 } from '../generated-definitions/GetLeaderboardConfigPublicRespV3.js'
import { LeaderboardConfigurationV3$ } from './endpoints/LeaderboardConfigurationV3$.js'

export function LeaderboardConfigurationV3Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getLeaderboards_v3(queryParams?: {
    isDeleted?: boolean | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetAllLeaderboardConfigsPublicRespV3>> {
    const $ = new LeaderboardConfigurationV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboards_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLeaderboard_ByLeaderboardCode_v3(leaderboardCode: string): Promise<AxiosResponse<GetLeaderboardConfigPublicRespV3>> {
    const $ = new LeaderboardConfigurationV3$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLeaderboard_ByLeaderboardCode_v3(leaderboardCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;p&gt;This endpoint return all leaderboard configurations&lt;/p&gt;
     */
    getLeaderboards_v3,
    /**
     * &lt;p&gt;This endpoint returns a leaderboard configuration&lt;/p&gt;
     */
    getLeaderboard_ByLeaderboardCode_v3
  }
}
