/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ArtifactListResponse } from '../../generated-definitions/ArtifactListResponse.js'
import { ArtifactUrlResponse } from '../../generated-definitions/ArtifactUrlResponse.js'
import { ArtifactUsageResponse } from '../../generated-definitions/ArtifactUsageResponse.js'
import { FleetArtifactsSampleRules } from '../../generated-definitions/FleetArtifactsSampleRules.js'

export class ArtifactsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [DELETE]
   */
  deleteArtifact(queryParams?: {
    artifactType?: string | null
    fleetId?: string | null
    uploadedBefore?: string | null
  }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/artifacts'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get all artifacts matching the provided search criteria. When criteria is not specified the data returned won&#39;t have been filtered on those parameters Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
   */
  getArtifacts(queryParams?: {
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
  }): Promise<Response<ArtifactListResponse>> {
    const params = { count: 100, sortBy: 'created_on', sortDirection: 'desc', ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/artifacts'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ArtifactListResponse, 'ArtifactListResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
   */
  getArtifactsUsage(): Promise<Response<ArtifactUsageResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/artifacts/usage'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ArtifactUsageResponse, 'ArtifactUsageResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [DELETE]
   */
  deleteArtifact_ByArtifactId(artifactID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/artifacts/{artifactID}'
      .replace('{namespace}', this.namespace)
      .replace('{artifactID}', artifactID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
   */
  getUrl_ByArtifactId(artifactID: string): Promise<Response<ArtifactUrlResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/artifacts/{artifactID}/url'
      .replace('{namespace}', this.namespace)
      .replace('{artifactID}', artifactID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ArtifactUrlResponse, 'ArtifactUrlResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ]
   */
  getArtifactsSamplingRules_ByFleetId(fleetID: string): Promise<Response<FleetArtifactsSampleRules>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/artifacts-sampling-rules'
      .replace('{namespace}', this.namespace)
      .replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FleetArtifactsSampleRules,
      'FleetArtifactsSampleRules'
    )
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [UPDATE]
   */
  updateArtifactsSamplingRule_ByFleetId(fleetID: string, data: FleetArtifactsSampleRules): Promise<Response<FleetArtifactsSampleRules>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/artifacts-sampling-rules'
      .replace('{namespace}', this.namespace)
      .replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FleetArtifactsSampleRules,
      'FleetArtifactsSampleRules'
    )
  }
}
