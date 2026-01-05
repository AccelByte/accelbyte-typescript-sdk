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
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'
import { RecentPlayerAdmin$ } from './endpoints/RecentPlayerAdmin$.js'

export function RecentPlayerAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRecentPlayer(queryParams?: {
    limit?: number
    userId?: string | null
  }): Promise<AxiosResponse<RecentPlayerQueryResponse>> {
    const $ = new RecentPlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecentPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRecentTeamPlayer(queryParams?: {
    limit?: number
    userId?: string | null
  }): Promise<AxiosResponse<RecentPlayerQueryResponse>> {
    const $ = new RecentPlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecentTeamPlayer(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query recent player with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
     */
    getRecentPlayer,
    /**
     * Query recent player who were on the same team with given user id. If user id parameter is empty: 1. Using User Token : It will get the user id from the token 2. Using client token : it will throw an error Please ensure environment variable &#34;RECENT_TEAM_PLAYER_ENABLED&#34; is set to &#34;TRUE&#34; to use this feature.
     */
    getRecentTeamPlayer
  }
}
