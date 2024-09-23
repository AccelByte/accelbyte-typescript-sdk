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
import { AddDownloadCountResponse } from '../generated-definitions/AddDownloadCountResponse.js'
import { PaginatedContentDownloaderResponse } from '../generated-definitions/PaginatedContentDownloaderResponse.js'
import { PublicDownloadCountV2$ } from './endpoints/PublicDownloadCountV2$.js'

export function PublicDownloadCountV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getDownloader_ByContentId_v2(
    contentId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; userId?: string | null }
  ): Promise<AxiosResponse<PaginatedContentDownloaderResponse>> {
    const $ = new PublicDownloadCountV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDownloader_ByContentId_v2(contentId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDownloadcount_ByContentId_v2(contentId: string): Promise<AxiosResponse<AddDownloadCountResponse>> {
    const $ = new PublicDownloadCountV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDownloadcount_ByContentId_v2(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint will only display the list of users who performed add download count from v2 endpoint.
     */
    getDownloader_ByContentId_v2,
    /**
     * This endpoint can be used to count how many the ugc downloaded
     */
    createDownloadcount_ByContentId_v2
  }
}
