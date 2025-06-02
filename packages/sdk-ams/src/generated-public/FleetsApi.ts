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
import { FleetClaimByKeysReq } from '../generated-definitions/FleetClaimByKeysReq.js'
import { FleetClaimReq } from '../generated-definitions/FleetClaimReq.js'
import { FleetClaimResponse } from '../generated-definitions/FleetClaimResponse.js'
import { Fleets$ } from './endpoints/Fleets$.js'

export function FleetsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function updateServerClaim(data: FleetClaimByKeysReq): Promise<AxiosResponse<FleetClaimResponse>> {
    const $ = new Fleets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServerClaim(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClaim_ByFleetId(fleetID: string, data: FleetClaimReq): Promise<AxiosResponse<FleetClaimResponse>> {
    const $ = new Fleets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClaim_ByFleetId(fleetID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Claim a dedicated server from fleets with matching claim keys. If the claim key is for a regular fleet (non development), the request will instantly fail if there are no DS available (HTTP 404). If the claim key is for a development fleet and there are no DS available, a new DS will be launched and the request might take up to 8 seconds to return (depending on the environment configuration). If it&#39;s not ready after that duration the request will still return HTTP 404. In either case, the call to this endpoint may be retried at any time to check if a DS has become available. Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
     */
    updateServerClaim,
    /**
     * Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
     */
    updateClaim_ByFleetId
  }
}
