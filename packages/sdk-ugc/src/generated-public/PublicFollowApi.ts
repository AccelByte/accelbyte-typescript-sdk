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
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { UserFollowRequest } from '../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../generated-definitions/UserFollowResponse.js'
import { PublicFollow$ } from './endpoints/PublicFollow$.js'

export function PublicFollowApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getUsersFollowed(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersFollowed(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContentsFollowed(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentsFollowed(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateFollow_ByUserId(userId: string, data: UserFollowRequest): Promise<AxiosResponse<UserFollowResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFollow_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFollowers_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFollowers_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFollowing_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFollowing_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Requires valid user token
     */
    getUsersFollowed,
    /**
     * Requires valid user token
     */
    getContentsFollowed,
    /**
     * Requires valid user token
     */
    updateFollow_ByUserId,

    getFollowers_ByUserId,

    getFollowing_ByUserId
  }
}
