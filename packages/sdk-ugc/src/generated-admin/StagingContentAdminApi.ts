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
import { ApproveStagingContentRequest } from '../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { StagingContentAdmin$ } from './endpoints/StagingContentAdmin$.js'

export function StagingContentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getStagingContents_v2(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStagingContent_ByContentId_v2(contentId: string): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContent_ByContentId_v2(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getStagingContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createApprove_ByContentId_v2(
    contentId: string,
    data: ApproveStagingContentRequest
  ): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createApprove_ByContentId_v2(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List content that need admin&#39;s approval
     */
    getStagingContents_v2,
    /**
     * Get staging content by ID
     */
    getStagingContent_ByContentId_v2,
    /**
     * List user content&#39;s that need admin approval
     */
    getStagingContents_ByUserId_v2,
    /**
     * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
     */
    createApprove_ByContentId_v2
  }
}
