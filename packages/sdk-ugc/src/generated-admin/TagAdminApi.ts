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
import { CreateTagRequest } from '../generated-definitions/CreateTagRequest.js'
import { CreateTagResponse } from '../generated-definitions/CreateTagResponse.js'
import { PaginatedGetTagResponse } from '../generated-definitions/PaginatedGetTagResponse.js'
import { TagAdmin$ } from './endpoints/TagAdmin$.js'

export function TagAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getTags(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<PaginatedGetTagResponse>> {
    const $ = new TagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTag(data: CreateTagRequest): Promise<AxiosResponse<CreateTagResponse>> {
    const $ = new TagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTag(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTag_ByTagId(tagId: string): Promise<AxiosResponse<unknown>> {
    const $ = new TagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTag_ByTagId(tagId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTag_ByTagId(tagId: string, data: CreateTagRequest): Promise<AxiosResponse<CreateTagResponse>> {
    const $ = new TagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTag_ByTagId(tagId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get available tags paginated
     */
    getTags,
    /**
     * Creates a new tag
     */
    createTag,
    /**
     * Delete existing tag
     */
    deleteTag_ByTagId,
    /**
     * Update existing tag
     */
    updateTag_ByTagId
  }
}
