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
import { CreateGroupRequest } from '../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../generated-definitions/PaginatedGroupResponse.js'
import { GroupAdmin$ } from './endpoints/GroupAdmin$.js'

export function GroupAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getGroups(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<PaginatedGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createGroup(data: CreateGroupRequest): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGroup(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGroup_ByGroupId(groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGroup_ByGroupId(groupId: string): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGroup_ByGroupId(groupId: string, data: CreateGroupRequest): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByGroupId_v2(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByGroupId_v2(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateGroup_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    data: CreateGroupRequest
  ): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByUserId_ByGroupId(userId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getContents_ByUserId_ByGroupId_v2(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId_v2(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get user group paginated
     */
    getGroups,
    /**
     * Create group
     */
    createGroup,
    /**
     * Delete group by group ID
     */
    deleteGroup_ByGroupId,
    /**
     * Get user group by group ID
     */
    getGroup_ByGroupId,
    /**
     * Replace group name and contents with new ones.
     */
    updateGroup_ByGroupId,
    /**
     * Get user group paginated
     */
    getGroups_ByUserId,
    /**
     * Get content belong to a group
     */
    getContents_ByGroupId,
    /**
     * Get contents belong to a group
     */
    getContents_ByGroupId_v2,
    /**
     * Delete group
     */
    deleteGroup_ByUserId_ByGroupId,
    /**
     * Get user group by group ID
     */
    getGroup_ByUserId_ByGroupId,
    /**
     * Replace group name and contents with new ones.
     */
    updateGroup_ByUserId_ByGroupId,
    /**
     * Get content belong to a group
     */
    getContents_ByUserId_ByGroupId,
    /**
     * Get contents belong to a group
     */
    getContents_ByUserId_ByGroupId_v2
  }
}
