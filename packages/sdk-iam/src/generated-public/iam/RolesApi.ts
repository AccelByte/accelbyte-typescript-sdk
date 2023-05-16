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
import { RoleNamesResponseV3 } from './definitions/RoleNamesResponseV3.js'
import { RoleResponse } from './definitions/RoleResponse.js'
import { Roles$ } from './endpoints/Roles$.js'

export function RolesApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  &lt;br&gt;This endpoint is used to get all non-admin role. &lt;br&gt; &lt;p&gt;action code: 10418&lt;/p&gt;
   */
  async function getRoles(queryParams?: {
    after?: string | null
    before?: string | null
    isWildcard?: boolean | null
    limit?: number
  }): Promise<RoleNamesResponseV3> {
    const $ = new Roles$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   *  &lt;br&gt;This endpoint is used to get non-admin role based on specify roleId. &lt;br&gt;action code : 10417
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
