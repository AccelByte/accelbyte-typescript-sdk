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
import { RoleOverrideResponse } from '../generated-definitions/RoleOverrideResponse.js'
import { RoleOverrideSourceResponse } from '../generated-definitions/RoleOverrideSourceResponse.js'
import { RoleOverrideStatsUpdateRequest } from '../generated-definitions/RoleOverrideStatsUpdateRequest.js'
import { RoleOverrideUpdateRequest } from '../generated-definitions/RoleOverrideUpdateRequest.js'
import { RolePermissionResponseV3 } from '../generated-definitions/RolePermissionResponseV3.js'
import { OverrideRoleConfigV3Admin$ } from './endpoints/OverrideRoleConfigV3Admin$.js'

export function OverrideRoleConfigV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRoleoverride_v3(queryParams: {
    identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
  }): Promise<AxiosResponse<RoleOverrideResponse>> {
    const $ = new OverrideRoleConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoleoverride_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRoleoverride_v3(
    data: RoleOverrideUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<AxiosResponse<RoleOverrideResponse>> {
    const $ = new OverrideRoleConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRoleoverride_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRoleoverrideSource_v3(queryParams: {
    identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
  }): Promise<AxiosResponse<RoleOverrideSourceResponse>> {
    const $ = new OverrideRoleConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoleoverrideSource_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRoleoverrideStatus_v3(
    data: RoleOverrideStatsUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<AxiosResponse<RoleOverrideResponse>> {
    const $ = new OverrideRoleConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRoleoverrideStatus_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPermissions_ByRoleId_v3(roleId: string): Promise<AxiosResponse<RolePermissionResponseV3>> {
    const $ = new OverrideRoleConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPermissions_ByRoleId_v3(roleId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get role override config. This API has upsert behavior, if there is no config yet, it will create a new one with inactive status.
     */
    getRoleoverride_v3,
    /**
     * This API is for updating role override config. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
     */
    patchRoleoverride_v3,
    /**
     * Get role source permission set.
     */
    getRoleoverrideSource_v3,
    /**
     * Enable or disable the target role override feature in path namespace. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
     */
    patchRoleoverrideStatus_v3,
    /**
     * Get role namespace permission set.
     */
    getPermissions_ByRoleId_v3
  }
}
