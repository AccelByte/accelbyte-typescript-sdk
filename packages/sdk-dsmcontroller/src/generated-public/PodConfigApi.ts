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
import { CreatePodConfigRequest } from '../generated-definitions/CreatePodConfigRequest.js'
import { ListPodConfigResponse } from '../generated-definitions/ListPodConfigResponse.js'
import { PodConfigRecord } from '../generated-definitions/PodConfigRecord.js'
import { PodConfig$ } from './endpoints/PodConfig$.js'

export function PodConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getConfigsPods(queryParams: { count: number; offset: number }): Promise<AxiosResponse<ListPodConfigResponse>> {
    const $ = new PodConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsPods(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteConfigPod_ByName(name: string): Promise<AxiosResponse<unknown>> {
    const $ = new PodConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigPod_ByName(name)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createConfigPod_ByName(name: string, data: CreatePodConfigRequest): Promise<AxiosResponse<PodConfigRecord>> {
    const $ = new PodConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigPod_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all pod configs in a namespace Parameter Offset and Count is Required
     */
    getConfigsPods,
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server pod config in a namespace
     */
    deleteConfigPod_ByName,
    /**
     * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers pod config in a namespace.
     */
    createConfigPod_ByName
  }
}
