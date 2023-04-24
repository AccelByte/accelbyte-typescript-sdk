/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { RoleNamesResponseV3 } from './definitions/RoleNamesResponseV3'
import { RoleResponse } from './definitions/RoleResponse'
import { Roles$ } from './endpoints/Roles$'

export function RolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  <br>This endpoint is used to get all non-admin role. <br> <p>action code: 10418</p>
   */
  async function getRoles(queryParams?: {
    limit?: number
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
  }): Promise<RoleNamesResponseV3> {
    const $ = new Roles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  <br>This endpoint is used to get non-admin role based on specify roleId. <br>action code : 10417
   */
  async function getRole_ByRoleId(roleId: string): Promise<RoleResponse> {
    const $ = new Roles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRole_ByRoleId(roleId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getRoles,
    getRole_ByRoleId
  }
}
