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
import { TagCreateRequestV3 } from '../generated-definitions/TagCreateRequestV3.js'
import { TagResponse } from '../generated-definitions/TagResponse.js'
import { TagUpdateRequestV3 } from '../generated-definitions/TagUpdateRequestV3.js'
import { TagsGetResponseV3 } from '../generated-definitions/TagsGetResponseV3.js'
import { AccountIdentifierTagAdmin$ } from './endpoints/AccountIdentifierTagAdmin$.js'

export function AccountIdentifierTagAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getTags_v3(queryParams?: {
    limit?: number
    offset?: number
    tagName?: string | null
  }): Promise<AxiosResponse<TagsGetResponseV3>> {
    const $ = new AccountIdentifierTagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTags_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createTag_v3(data: TagCreateRequestV3): Promise<AxiosResponse<TagResponse>> {
    const $ = new AccountIdentifierTagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTag_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteTag_ByTagId_v3(tagId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AccountIdentifierTagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTag_ByTagId_v3(tagId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTag_ByTagId_v3(tagId: string, data: TagUpdateRequestV3): Promise<AxiosResponse<TagResponse>> {
    const $ = new AccountIdentifierTagAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTag_ByTagId_v3(tagId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve Account Identifier Tags. This endpoint allows administrators to retrieve tags that are used to identify and categorize user accounts. Tag Name can be used for partial content search.
     */
    getTags_v3,
    /**
     * Create a new Account Identifier Tag for users. This endpoint allows administrators to create tags that can be used to identify and categorize user accounts.
     */
    createTag_v3,
    /**
     * Delete an Account Identifier Tag. This endpoint allows administrators to delete a tag that is used to identify and categorize user accounts.
     */
    deleteTag_ByTagId_v3,
    /**
     * Update an existing Account Identifier Tag. This endpoint allows administrators to update the details of a tag that is used to identify and categorize user accounts.
     */
    updateTag_ByTagId_v3
  }
}
