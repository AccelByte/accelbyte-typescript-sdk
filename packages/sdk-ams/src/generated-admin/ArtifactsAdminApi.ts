/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { ArtifactListResponse } from '../generated-definitions/ArtifactListResponse.js'
import { ArtifactUrlResponse } from '../generated-definitions/ArtifactUrlResponse.js'
import { ArtifactUsageResponse } from '../generated-definitions/ArtifactUsageResponse.js'
import { FleetArtifactsSampleRules } from '../generated-definitions/FleetArtifactsSampleRules.js'
import { ArtifactsAdmin$ } from './endpoints/ArtifactsAdmin$.js'

export function ArtifactsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteArtifact(queryParams?: {
    artifactType?: string | null
    fleetId?: string | null
    uploadedBefore?: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteArtifact(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getArtifacts(queryParams?: {
    artifactType?: string | null
    count?: number
    endDate?: string | null
    fleetID?: string | null
    imageID?: string | null
    maxSize?: number
    minSize?: number
    offset?: number
    region?: string | null
    serverId?: string | null
    sortBy?: string | null
    sortDirection?: 'asc' | 'desc'
    startDate?: string | null
    status?: string | null
  }): Promise<AxiosResponse<ArtifactListResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifacts(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getArtifactsUsage(): Promise<AxiosResponse<ArtifactUsageResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifactsUsage()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteArtifact_ByArtifactId(artifactID: string): Promise<AxiosResponse<unknown>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteArtifact_ByArtifactId(artifactID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUrl_ByArtifactId(artifactID: string): Promise<AxiosResponse<ArtifactUrlResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUrl_ByArtifactId(artifactID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getArtifactsSamplingRules_ByFleetId(fleetID: string): Promise<AxiosResponse<FleetArtifactsSampleRules>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifactsSamplingRules_ByFleetId(fleetID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateArtifactsSamplingRule_ByFleetId(
    fleetID: string,
    data: FleetArtifactsSampleRules
  ): Promise<AxiosResponse<FleetArtifactsSampleRules>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateArtifactsSamplingRule_ByFleetId(fleetID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [DELETE]
     */
    deleteArtifact,
    /**
     * Get all artifacts matching the provided search criteria. When criteria is not specified the data returned won&#39;t have been filtered on those parameters Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
     */
    getArtifacts,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
     */
    getArtifactsUsage,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [DELETE]
     */
    deleteArtifact_ByArtifactId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
     */
    getUrl_ByArtifactId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
     */
    getArtifactsSamplingRules_ByFleetId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [UPDATE]
     */
    updateArtifactsSamplingRule_ByFleetId
  }
}
