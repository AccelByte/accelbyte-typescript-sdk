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
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'
import { SetAliasRequest } from '../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../generated-definitions/UpdateServerRequest.js'

export function AdminAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * ``` Required permission: ADMIN:QOS:SERVER [DELETE] Required scope: social This endpoint delete a registered QoS service record. ```
   */
  async function deleteServer_ByRegion(region: string): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteServer_ByRegion(region)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:QOS:SERVER [UDPATE] Required scope: social This endpoint modifies a registered QoS service&#39;s region alias. ```
   */
  async function createAlia_ByRegion(region: string, data: SetAliasRequest): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createAlia_ByRegion(region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] Required scope: social This endpoint updates the registered QoS service&#39;s configurable configuration&#39;. ```
   */
  async function patchServer_ByRegion(region: string, data: UpdateServerRequest): Promise<unknown> {
    const $ = new AdminAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchServer_ByRegion(region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteServer_ByRegion,
    createAlia_ByRegion,
    patchServer_ByRegion
  }
}
