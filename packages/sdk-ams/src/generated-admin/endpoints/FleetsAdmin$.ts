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
import { FleetCreateResponse } from '../../generated-definitions/FleetCreateResponse.js'
import { FleetGetResponse } from '../../generated-definitions/FleetGetResponse.js'
import { FleetListResponse } from '../../generated-definitions/FleetListResponse.js'
import { FleetParameters } from '../../generated-definitions/FleetParameters.js'
import { FleetServersResponse } from '../../generated-definitions/FleetServersResponse.js'

export class FleetsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getFleets(queryParams?: {
    active?: boolean | null
    count?: number
    name?: string | null
    offset?: number
    region?: string | null
    sortBy?: 'active' | 'name'
    sortDirection?: 'asc' | 'desc'
  }): Promise<Response<FleetListResponse>> {
    const params = { count: 100, ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetListResponse, 'FleetListResponse')
  }
  /**
   * Optionally, sampling rules for the fleet can also be specified Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE]
   */
  createFleet(data: FleetParameters): Promise<Response<FleetCreateResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetCreateResponse, 'FleetCreateResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE]
   */
  deleteFleet_ByFleetId(fleetID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}'.replace('{namespace}', this.namespace).replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getFleet_ByFleetId(fleetID: string): Promise<Response<FleetGetResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}'.replace('{namespace}', this.namespace).replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetGetResponse, 'FleetGetResponse')
  }
  /**
   * Optionally, sampling rules for the fleet can also be updated Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [UPDATE]
   */
  updateFleet_ByFleetId(fleetID: string, data: FleetParameters): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}'.replace('{namespace}', this.namespace).replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getServers_ByFleetId(
    fleetID: string,
    queryParams?: {
      count?: number
      offset?: number
      region?: string | null
      serverId?: string | null
      sortBy?: string | null
      sortDirection?: 'asc' | 'desc'
      status?: 'claimed' | 'claiming' | 'crash backoff' | 'creating' | 'draining' | 'ready' | 'unresponsive'
    }
  ): Promise<Response<FleetServersResponse>> {
    const params = { count: 10000, sortBy: 'created_at', sortDirection: 'desc', ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/servers'
      .replace('{namespace}', this.namespace)
      .replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetServersResponse, 'FleetServersResponse')
  }
}
