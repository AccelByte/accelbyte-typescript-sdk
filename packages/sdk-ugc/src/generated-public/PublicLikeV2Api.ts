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
import { ContentLikeRequest } from '../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentLikersResponse } from '../generated-definitions/PaginatedContentLikersResponse.js'
import { PublicLikeV2$ } from './endpoints/PublicLikeV2$.js'

export function PublicLikeV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getLike_ByContentId_v2(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null }
  ): Promise<AxiosResponse<PaginatedContentLikersResponse>> {
    const $ = new PublicLikeV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLike_ByContentId_v2(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLike_ByContentId_v2(contentId: string, data: ContentLikeRequest): Promise<AxiosResponse<ContentLikeResponse>> {
    const $ = new PublicLikeV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLike_ByContentId_v2(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint will only display the list of users who performed like from v2 endpoint.
     */
    getLike_ByContentId_v2,
    /**
     * This endpoint will update like/unlike state from a content
     */
    updateLike_ByContentId_v2
  }
}
