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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateDeploymentOverrideRequest } from '../generated-definitions/CreateDeploymentOverrideRequest.js'
import { CreateDeploymentRequest } from '../generated-definitions/CreateDeploymentRequest.js'
import { CreateRegionOverrideRequest } from '../generated-definitions/CreateRegionOverrideRequest.js'
import { DeploymentWithOverride } from '../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../generated-definitions/ListDeploymentResponse.js'
import { UpdateDeploymentOverrideRequest } from '../generated-definitions/UpdateDeploymentOverrideRequest.js'
import { UpdateDeploymentRequest } from '../generated-definitions/UpdateDeploymentRequest.js'
import { UpdateRegionOverrideRequest } from '../generated-definitions/UpdateRegionOverrideRequest.js'
import { DeploymentConfigAdmin$ } from './endpoints/DeploymentConfigAdmin$.js'

export function DeploymentConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getConfigsDeployments(queryParams: {
    count: number
    offset: number
    name?: string | null
  }): Promise<AxiosResponse<ListDeploymentResponse>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsDeployments(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfigDeployment_ByDeployment(deployment: string): Promise<AxiosResponse<unknown>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getConfigDeployment_ByDeployment(deployment: string): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchConfigDeployment_ByDeployment(
    deployment: string,
    data: UpdateDeploymentRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfigDeployment_ByDeployment(
    deployment: string,
    data: CreateDeploymentRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteQueueConfig_ByDeployment_ByVersion(deployment: string, version: string): Promise<AxiosResponse<unknown>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteQueueConfig_ByDeployment_ByVersion(deployment, version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteOverrideRegionConfig_ByDeployment_ByRegion(deployment, region)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchOverrideRegionConfig_ByDeployment_ByRegion(deployment, region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createOverrideRegionConfig_ByDeployment_ByRegion(
    deployment: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOverrideRegionConfig_ByDeployment_ByRegion(deployment, region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: CreateDeploymentOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOverrideVersionConfig_ByDeployment_ByVersion(deployment, version, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteOverrideVersionConfig_ByDeployment_ByVersion(deployment, version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchOverrideVersionConfig_ByDeployment_ByVersion(
    deployment: string,
    version: string,
    data: UpdateDeploymentOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchOverrideVersionConfig_ByDeployment_ByVersion(deployment, version, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: UpdateRegionOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(
    deployment: string,
    version: string,
    region: string,
    data: CreateRegionOverrideRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion(deployment, version, region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
     */
    getConfigsDeployments,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
     */
    deleteConfigDeployment_ByDeployment,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
     */
    getConfigDeployment_ByDeployment,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment in a namespace.
     */
    patchConfigDeployment_ByDeployment,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
     */
    createConfigDeployment_ByDeployment,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint deletes the deployment creating server count queue in a namespace in all registered region for the selected version
     */
    deleteQueueConfig_ByDeployment_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for root deployment
     */
    deleteOverrideRegionConfig_ByDeployment_ByRegion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for root deployment.
     */
    patchOverrideRegionConfig_ByDeployment_ByRegion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for root deployment.
     */
    createOverrideRegionConfig_ByDeployment_ByRegion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment override in a namespace.
     */
    createOverrideVersionConfig_ByDeployment_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace
     */
    deleteOverrideVersionConfig_ByDeployment_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace.
     */
    patchOverrideVersionConfig_ByDeployment_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment override in a namespace in a region for deployment overrides
     */
    deleteRegionOverrideConfig_ByDeployment_ByVersion_ByRegion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint update a dedicated servers deployment override in a namespace in a region for deployment overrides.
     */
    patchRegionOverrideConfig_ByDeployment_ByVersion_ByRegion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint creates a dedicated servers deployment override in a namespace in a region for deployment overrides.
     */
    createRegionOverrideConfig_ByDeployment_ByVersion_ByRegion
  }
}
