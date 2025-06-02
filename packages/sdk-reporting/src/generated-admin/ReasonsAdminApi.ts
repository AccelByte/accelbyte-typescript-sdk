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
import { AdminAllReasonsResponse } from '../generated-definitions/AdminAllReasonsResponse.js'
import { AdminReasonListResponse } from '../generated-definitions/AdminReasonListResponse.js'
import { AdminReasonResponse } from '../generated-definitions/AdminReasonResponse.js'
import { CreateReasonGroupRequest } from '../generated-definitions/CreateReasonGroupRequest.js'
import { CreateReasonRequest } from '../generated-definitions/CreateReasonRequest.js'
import { ReasonGroupListResponse } from '../generated-definitions/ReasonGroupListResponse.js'
import { ReasonGroupResponse } from '../generated-definitions/ReasonGroupResponse.js'
import { UnusedReasonListResponse } from '../generated-definitions/UnusedReasonListResponse.js'
import { UpdateReasonGroupRequest } from '../generated-definitions/UpdateReasonGroupRequest.js'
import { ReasonsAdmin$ } from './endpoints/ReasonsAdmin$.js'

export function ReasonsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getReasons(queryParams?: {
    group?: string | null
    limit?: number
    offset?: number
    title?: string | null
  }): Promise<AxiosResponse<AdminReasonListResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasons(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createReason(data: CreateReasonRequest): Promise<AxiosResponse<AdminReasonResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReason(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReasonsAll(): Promise<AxiosResponse<AdminAllReasonsResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasonsAll()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReasonGroups(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<ReasonGroupListResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasonGroups(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createReasonGroup(data: CreateReasonGroupRequest): Promise<AxiosResponse<ReasonGroupResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReasonGroup(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReasonsUnused(queryParams: {
    category: string | null
    extensionCategory?: string | null
  }): Promise<AxiosResponse<UnusedReasonListResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasonsUnused(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReason_ByReasonId(reasonId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReason_ByReasonId(reasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReason_ByReasonId(reasonId: string): Promise<AxiosResponse<AdminReasonResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReason_ByReasonId(reasonId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchReason_ByReasonId(reasonId: string, data: CreateReasonRequest): Promise<AxiosResponse<AdminReasonResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchReason_ByReasonId(reasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteReasonGroup_ByGroupId(groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReasonGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getReasonGroup_ByGroupId(groupId: string): Promise<AxiosResponse<ReasonGroupResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasonGroup_ByGroupId(groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchReasonGroup_ByGroupId(groupId: string, data: UpdateReasonGroupRequest): Promise<AxiosResponse<ReasonGroupResponse>> {
    const $ = new ReasonsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchReasonGroup_ByGroupId(groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This endpoint get reasons with pagination
     */
    getReasons,
    /**
     * This endpoint create a reason for a namespace.
     */
    createReason,
    /**
     * This endpoint get all reasons without pagination.
     */
    getReasonsAll,
    /**
     * Return list of reason groups ID and title under given namespace. To fetch the reasons inside a group, use get reason group endpoint.
     */
    getReasonGroups,
    /**
     * Create a reason group for easier query. You can query reasons by specifying the group title in the list reasons query. Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason**
     */
    createReasonGroup,
    /**
     * This endpoint get reasons not used by moderation rules.
     */
    getReasonsUnused,
    /**
     * This endpoint delete a reason for a namespace with ID.
     */
    deleteReason_ByReasonId,
    /**
     * This endpoint get a single reason.
     */
    getReason_ByReasonId,
    /**
     * This endpoint update a reason for a namespace with ID.
     */
    patchReason_ByReasonId,
    /**
     * This endpoint delete a reason group for a namespace with ID.
     */
    deleteReasonGroup_ByGroupId,

    getReasonGroup_ByGroupId,
    /**
     * Reason group title is case insensitive, meaning you can&#39;t have **reason** if you already create a reason titled **Reason** If no reasonIds passed when updating, the current reasons under the reason group will be kept (reasons will not be removed from the group).
     */
    patchReasonGroup_ByGroupId
  }
}
