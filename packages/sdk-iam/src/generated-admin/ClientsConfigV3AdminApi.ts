/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { ClientsConfigV3Admin$ } from './endpoints/ClientsConfigV3Admin$.js'
import { ListClientPermissionSet } from '../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../generated-definitions/PermissionSetDeleteGroupRequest.js'

export function ClientsConfigV3AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * List client templates
   */
  async function getClientConfigTemplates(): Promise<ListTemplatesResponse> {
    const $ = new ClientsConfigV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getClientConfigTemplates()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete Client config permissions by module and group.
   */
  async function deleteClientConfigPermission(
    data: PermissionSetDeleteGroupRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<unknown> {
    const $ = new ClientsConfigV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.deleteClientConfigPermission(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * List Client available permissions
   */
  async function getClientConfigPermissions(queryParams?: { excludePermissions?: boolean | null }): Promise<ListClientPermissionSet> {
    const $ = new ClientsConfigV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getClientConfigPermissions(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update Client available permissions, if module or group not exists, it will auto create.
   */
  async function updateClientConfigPermission(
    data: ListUpsertModulesRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<unknown> {
    const $ = new ClientsConfigV3Admin$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.updateClientConfigPermission(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getClientConfigTemplates,
    deleteClientConfigPermission,
    getClientConfigPermissions,
    updateClientConfigPermission
  }
}
