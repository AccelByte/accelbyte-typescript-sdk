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
import { CreateDeploymentOverrideRequest } from '../generated-definitions/CreateDeploymentOverrideRequest.js'
import { CreateDeploymentRequest } from '../generated-definitions/CreateDeploymentRequest.js'
import { CreateRegionOverrideRequest } from '../generated-definitions/CreateRegionOverrideRequest.js'
import { DeploymentConfigAdmin$ } from './endpoints/DeploymentConfigAdmin$.js'
import { DeploymentWithOverride } from '../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../generated-definitions/ListDeploymentResponse.js'
import { UpdateDeploymentOverrideRequest } from '../generated-definitions/UpdateDeploymentOverrideRequest.js'
import { UpdateDeploymentRequest } from '../generated-definitions/UpdateDeploymentRequest.js'
import { UpdateRegionOverrideRequest } from '../generated-definitions/UpdateRegionOverrideRequest.js'

export function DeploymentConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  async function getConfigsDeployments(queryParams: {
    count: number
    offset: number
    name?: string | null
  }): Promise<ListDeploymentResponse> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigsDeployments(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  async function deleteConfigDeployment_ByDeployment(deployment: string): Promise<unknown> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
   */
  async function getConfigDeployment_ByDeployment(deployment: string): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment in a namespace.
   */
  async function patchConfigDeployment_ByDeployment(deployment: string, data: UpdateDeploymentRequest): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  async function createConfigDeployment_ByDeployment(deployment: string, data: CreateDeploymentRequest): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint deletes the deployment creating server count queue in a namespace in all registered region for the selected version
   */
  async function deleteQueueConfig_ByDeployment_ByVersion(deployment: string, version: string): Promise<unknown> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteQueueConfig_ByDeployment_ByVersion(deployment, version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for root deployment
   */
  async function deleteOverrideRegionConfig_ByDeployment_ByRegion(deployment: string, region: string): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteOverrideRegionConfig_ByDeployment_ByRegion(deployment, region)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for root deployment.
   */
  async function patchOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchOverrideRegionConfig_ByDeployment_ByRegion(deployment, region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for root deployment.
   */
  async function createOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createOverrideRegionConfig_ByDeployment_ByRegion(deployment, region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment override in a namespace.
   */
  async function createOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: CreateDeploymentOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createOverrideVersionConfig_ByDeployment_ByVersion(deployment, version, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace
   */
  async function deleteOverrideVersionConfig_ByDeployment_ByVersion(deployment: string, version: string): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteOverrideVersionConfig_ByDeployment_ByVersion(deployment, version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace.
   */
  async function patchOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: UpdateDeploymentOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchOverrideVersionConfig_ByDeployment_ByVersion(deployment, version, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for deployment overrides
   */
  async function deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for deployment overrides.
   */
  async function patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for deployment overrides.
   */
  async function createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<DeploymentWithOverride> {
    const $ = new DeploymentConfigAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getConfigsDeployments,
    deleteConfigDeployment_ByDeployment,
    getConfigDeployment_ByDeployment,
    patchConfigDeployment_ByDeployment,
    createConfigDeployment_ByDeployment,
    deleteQueueConfig_ByDeployment_ByVersion,
    deleteOverrideRegionConfig_ByDeployment_ByRegion,
    patchOverrideRegionConfig_ByDeployment_ByRegion,
    createOverrideRegionConfig_ByDeployment_ByRegion,
    createOverrideVersionConfig_ByDeployment_ByVersion,
    deleteOverrideVersionConfig_ByDeployment_ByVersion,
    patchOverrideVersionConfig_ByDeployment_ByVersion,
    deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion,
    patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion,
    createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion
  }
}
