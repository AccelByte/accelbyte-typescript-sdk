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
import { GetGrpcReflectionInfo } from '../generated-definitions/GetGrpcReflectionInfo.js'
import { UtilityAdmin$ } from './endpoints/UtilityAdmin$.js'

export function UtilityAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getReflection(queryParams?: {
    appName?: string | null
    host?: string | null
    securityType?: string | null
  }): Promise<AxiosResponse<GetGrpcReflectionInfo>> {
    const $ = new UtilityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReflection(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission: `ADMIN:NAMESPACE:{namespace}:EXTEND:GRPCREFLECTION` (READ) Do gRPC reflection to get list of services info served by a server. Please use one of these parameter `host` or `appName`. Use query parameter `host` to get reflection for custom host/port address, or Use query parameter `appName` to get reflection for accelbyte hosted extend app
     */
    getReflection
  }
}
