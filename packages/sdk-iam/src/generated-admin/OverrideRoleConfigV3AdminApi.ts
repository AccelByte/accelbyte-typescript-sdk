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
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { RoleOverrideResponse } from '../generated-definitions/RoleOverrideResponse.js'
import { RoleOverrideSourceResponse } from '../generated-definitions/RoleOverrideSourceResponse.js'
import { RoleOverrideStatsUpdateRequest } from '../generated-definitions/RoleOverrideStatsUpdateRequest.js'
import { RoleOverrideUpdateRequest } from '../generated-definitions/RoleOverrideUpdateRequest.js'
import { RolePermissionResponseV3 } from '../generated-definitions/RolePermissionResponseV3.js'
import { OverrideRoleConfigV3Admin$ } from './endpoints/OverrideRoleConfigV3Admin$.js'

export function OverrideRoleConfigV3AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Get role override config. This API has upsert behavior, if there is no config yet, it will create a new one with inactive status.
   */
  async function getRoleoverride(queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }): Promise<RoleOverrideResponse> {
    const $ = new OverrideRoleConfigV3Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRoleoverride(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is for updating role override config. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
   */
  async function patchRoleoverride(
    data: RoleOverrideUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<RoleOverrideResponse> {
    const $ = new OverrideRoleConfigV3Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchRoleoverride(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get role source permission set.
   */
  async function getRoleoverrideSource(queryParams: {
    identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
  }): Promise<RoleOverrideSourceResponse> {
    const $ = new OverrideRoleConfigV3Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getRoleoverrideSource(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Enable or disable the target role override feature in path namespace. Note: This API has upsert behavior, if there is no config yet, it will create a new one first.
   */
  async function patchRoleoverrideStatus(
    data: RoleOverrideStatsUpdateRequest,
    queryParams: { identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY' }
  ): Promise<RoleOverrideResponse> {
    const $ = new OverrideRoleConfigV3Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchRoleoverrideStatus(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get role namespace permission set.
   */
  async function getPermissions_ByRoleId(roleId: string): Promise<RolePermissionResponseV3> {
    const $ = new OverrideRoleConfigV3Admin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPermissions_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoleoverride,
    patchRoleoverride,
    getRoleoverrideSource,
    patchRoleoverrideStatus,
    getPermissions_ByRoleId
  }
}
