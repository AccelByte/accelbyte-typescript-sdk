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
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../generated-definitions/UpdateStagingContentRequest.js'
import { PublicStagingContent$ } from './endpoints/PublicStagingContent$.js'

export function PublicStagingContentApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStagingContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteStagingContent_ByUserId_ByContentId_v2(userId: string, contentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStagingContent_ByUserId_ByContentId_v2(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStagingContent_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string
  ): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContent_ByUserId_ByContentId_v2(userId, contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStagingContent_ByUserId_ByContentId_v2(
    userId: string,
    contentId: string,
    data: UpdateStagingContentRequest
  ): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStagingContent_ByUserId_ByContentId_v2(userId, contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List user staging contents
     */
    getStagingContents_ByUserId_v2,
    /**
     * Delete user staging content by ID
     */
    deleteStagingContent_ByUserId_ByContentId_v2,
    /**
     * Get user staging content by ID
     */
    getStagingContent_ByUserId_ByContentId_v2,
    /**
     * Update staging content
     */
    updateStagingContent_ByUserId_ByContentId_v2
  }
}
