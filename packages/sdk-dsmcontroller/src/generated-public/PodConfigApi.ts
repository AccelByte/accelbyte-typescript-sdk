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
import { CreatePodConfigRequest } from '../generated-definitions/CreatePodConfigRequest.js'
import { ListPodConfigResponse } from '../generated-definitions/ListPodConfigResponse.js'
import { PodConfig$ } from './endpoints/PodConfig$.js'
import { PodConfigRecord } from '../generated-definitions/PodConfigRecord.js'

export function PodConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
   */
  async function getConfigsPods(queryParams: { count: number; offset: number }): Promise<ListPodConfigResponse> {
    const $ = new PodConfig$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getConfigsPods(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
   */
  async function deleteConfigPod_ByName(name: string): Promise<unknown> {
    const $ = new PodConfig$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteConfigPod_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
   */
  async function createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<PodConfigRecord> {
    const $ = new PodConfig$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createConfigPod_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigsPods,
    deleteConfigPod_ByName,
    createConfigPod_ByName
  }
}
