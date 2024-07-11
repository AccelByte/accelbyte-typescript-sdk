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
import { CreateDeploymentRequest } from '../generated-definitions/CreateDeploymentRequest.js'
import { DeploymentWithOverride } from '../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../generated-definitions/ListDeploymentResponse.js'
import { DeploymentConfig$ } from './endpoints/DeploymentConfig$.js'

export function DeploymentConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  async function getConfigsDeployments(queryParams: {
    count: number
    offset: number
    name?: string | null
  }): Promise<ListDeploymentResponse> {
    const $ = new DeploymentConfig$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigsDeployments(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  async function deleteConfigDeployment_ByDeployment(deployment: string): Promise<unknown> {
    const $ = new DeploymentConfig$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
   */
  async function getConfigDeployment_ByDeployment(deployment: string): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfig$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  async function createConfigDeployment_ByDeployment(deployment: string, data: CreateDeploymentRequest): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfig$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.createConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigsDeployments,
    deleteConfigDeployment_ByDeployment,
    getConfigDeployment_ByDeployment,
    createConfigDeployment_ByDeployment
  }
}
