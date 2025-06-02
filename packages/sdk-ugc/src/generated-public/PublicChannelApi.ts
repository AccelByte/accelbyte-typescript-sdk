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
import { ChannelResponse } from '../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../generated-definitions/PaginatedGetChannelResponse.js'
import { PublicChannelRequest } from '../generated-definitions/PublicChannelRequest.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'
import { PublicChannel$ } from './endpoints/PublicChannel$.js'

export function PublicChannelApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<AxiosResponse<PaginatedGetChannelResponse>> {
    const $ = new PublicChannel$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannels_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createChannel_ByUserId(userId: string, data: PublicChannelRequest): Promise<AxiosResponse<ChannelResponse>> {
    const $ = new PublicChannel$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChannel_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicChannel$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByUserId_ByChannelId(userId, channelId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateChannel_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: UpdateChannelRequest
  ): Promise<AxiosResponse<ChannelResponse>> {
    const $ = new PublicChannel$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChannel_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get user channel paginated
     */
    getChannels_ByUserId,
    /**
     * Create user channel
     */
    createChannel_ByUserId,
    /**
     * Delete user channel
     */
    deleteChannel_ByUserId_ByChannelId,
    /**
     * Update user channel
     */
    updateChannel_ByUserId_ByChannelId
  }
}
