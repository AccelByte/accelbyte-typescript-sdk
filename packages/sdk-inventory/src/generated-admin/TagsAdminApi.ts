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
import { CreateTagReq } from '../generated-definitions/CreateTagReq.js'
import { CreateTagResp } from '../generated-definitions/CreateTagResp.js'
import { ListTagsResp } from '../generated-definitions/ListTagsResp.js'
import { TagsAdmin$ } from './endpoints/TagsAdmin$.js'

export function TagsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getTags(queryParams?: {
    limit?: number
    offset?: number
    owner?: string | null
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
  }): Promise<AxiosResponse<ListTagsResp>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTags(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTag(data: CreateTagReq): Promise<AxiosResponse<CreateTagResp>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTag(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTag_ByTagName(tagName: string): Promise<AxiosResponse<unknown>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTag_ByTagName(tagName)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [READ]
     */
    getTags,
    /**
     *  This endpoint will create a new tag. The tag name must be unique per namespace. It is safe to call this endpoint even if the tag already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [CREATE]
     */
    createTag,
    /**
     *  This endpoint will delete a tag by tagName in a specified namespace. If the tagName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [DELETE]
     */
    deleteTag_ByTagName
  }
}
