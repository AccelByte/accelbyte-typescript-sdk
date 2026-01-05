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
import { SetAliasRequest } from '../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../generated-definitions/UpdateServerRequest.js'
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'

export function AdminAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteServer_ByRegion(region: string): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServer_ByRegion(region)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAlia_ByRegion(region: string, data: SetAliasRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAlia_ByRegion(region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchServer_ByRegion(region: string, data: UpdateServerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchServer_ByRegion(region, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ``` Required permission: ADMIN:QOS:SERVER [DELETE] Required scope: social This endpoint delete a registered QoS service record. ```
     */
    deleteServer_ByRegion,
    /**
     * ``` Required permission: ADMIN:QOS:SERVER [UDPATE] Required scope: social This endpoint modifies a registered QoS service&#39;s region alias. ```
     */
    createAlia_ByRegion,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] Required scope: social This endpoint updates the registered QoS service&#39;s configurable configuration&#39;. ```
     */
    patchServer_ByRegion
  }
}
