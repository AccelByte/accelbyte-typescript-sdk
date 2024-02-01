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
import { AdminTypeAdmin$ } from './endpoints/AdminTypeAdmin$.js'
import { CreateTypeRequest } from '../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../generated-definitions/PaginatedGetTypeResponse.js'

export function AdminTypeAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [READ]
   */
  async function getTypes(queryParams?: { limit?: number; offset?: number }): Promise<PaginatedGetTypeResponse> {
    const $ = new AdminTypeAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [CREATE] creates a new type and subtype
   */
  async function createType(data: CreateTypeRequest): Promise<CreateTypeResponse> {
    const $ = new AdminTypeAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createType(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [DELETE]
   */
  async function deleteType_ByTypeId(typeId: string): Promise<unknown> {
    const $ = new AdminTypeAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteType_ByTypeId(typeId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:UGCCONFIG [UPDATE] updates a type and subtype
   */
  async function updateType_ByTypeId(typeId: string, data: CreateTypeRequest): Promise<CreateTypeResponse> {
    const $ = new AdminTypeAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateType_ByTypeId(typeId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getTypes,
    createType,
    deleteType_ByTypeId,
    updateType_ByTypeId
  }
}
