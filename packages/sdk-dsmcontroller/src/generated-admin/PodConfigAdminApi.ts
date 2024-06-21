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
import { CreatePodConfigRequest } from '../generated-definitions/CreatePodConfigRequest.js'
import { InstanceSpec } from '../generated-definitions/InstanceSpec.js'
import { ListPodConfigResponse } from '../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../generated-definitions/PodConfigRecord.js'
import { UpdatePodConfigRequest } from '../generated-definitions/UpdatePodConfigRequest.js'
import { PodConfigAdmin$ } from './endpoints/PodConfigAdmin$.js'

export function PodConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required permission: ADMIN:NAMESPACE:*:DSM:CONFIG [READ] Required scope: social This endpoint returns the lowest instance spec, both cpu (in Mhz) and memory (in Mb).
   */
  async function getInstancesSpecLowest(): Promise<InstanceSpec> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getInstancesSpecLowest()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
   */
  async function getConfigsPods(queryParams: { count: number; offset: number }): Promise<ListPodConfigResponse> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigsPods(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
   */
  async function deleteConfigPod_ByName(name: string): Promise<unknown> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfigPod_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server pod config in a namespace
   */
  async function getConfigPod_ByName(name: string): Promise<PodConfigRecord> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigPod_ByName(name)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers pod config in a namespace.
   */
  async function patchConfigPod_ByName(name: string, data: UpdatePodConfigRequest): Promise<PodConfigRecord> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.patchConfigPod_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
   */
  async function createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<PodConfigRecord> {
    const $ = new PodConfigAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConfigPod_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInstancesSpecLowest,
    getConfigsPods,
    deleteConfigPod_ByName,
    getConfigPod_ByName,
    patchConfigPod_ByName,
    createConfigPod_ByName
  }
}
