/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { FleetCreateResponse } from '../generated-definitions/FleetCreateResponse.js'
import { FleetGetResponse } from '../generated-definitions/FleetGetResponse.js'
import { FleetListResponse } from '../generated-definitions/FleetListResponse.js'
import { FleetParameters } from '../generated-definitions/FleetParameters.js'
import { FleetServersResponse } from '../generated-definitions/FleetServersResponse.js'
import { FleetsAdmin$ } from './endpoints/FleetsAdmin$.js'

export function FleetsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getFleets(queryParams?: {
    active?: boolean | null
    count?: number
    name?: string | null
    offset?: number
    region?: string | null
    sortBy?: 'active' | 'name'
    sortDirection?: 'asc' | 'desc'
  }): Promise<AxiosResponse<FleetListResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFleets(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFleet(data: FleetParameters): Promise<AxiosResponse<FleetCreateResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFleet(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteFleet_ByFleetId(fleetID: string): Promise<AxiosResponse<unknown>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteFleet_ByFleetId(fleetID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getFleet_ByFleetId(fleetID: string): Promise<AxiosResponse<FleetGetResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFleet_ByFleetId(fleetID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateFleet_ByFleetId(fleetID: string, data: FleetParameters): Promise<AxiosResponse<unknown>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFleet_ByFleetId(fleetID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getServers_ByFleetId(
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
  ): Promise<AxiosResponse<FleetServersResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServers_ByFleetId(fleetID, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
     */
    getFleets,
    /**
     * Optionally, sampling rules for the fleet can also be specified Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE]
     */
    createFleet,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE]
     */
    deleteFleet_ByFleetId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
     */
    getFleet_ByFleetId,
    /**
     * Optionally, sampling rules for the fleet can also be updated Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [UPDATE]
     */
    updateFleet_ByFleetId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
     */
    getServers_ByFleetId
  }
}
