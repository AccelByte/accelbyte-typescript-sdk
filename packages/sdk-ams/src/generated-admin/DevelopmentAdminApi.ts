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
import { DevelopmentServerConfigurationCreateRequest } from '../generated-definitions/DevelopmentServerConfigurationCreateRequest.js'
import { DevelopmentServerConfigurationCreateResponse } from '../generated-definitions/DevelopmentServerConfigurationCreateResponse.js'
import { DevelopmentServerConfigurationGetResponse } from '../generated-definitions/DevelopmentServerConfigurationGetResponse.js'
import { DevelopmentServerConfigurationListResponse } from '../generated-definitions/DevelopmentServerConfigurationListResponse.js'
import { DevelopmentAdmin$ } from './endpoints/DevelopmentAdmin$.js'

export function DevelopmentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getDevelopmentServerConfigurations(queryParams?: {
    count?: number
    offset?: number
  }): Promise<AxiosResponse<DevelopmentServerConfigurationListResponse>> {
    const $ = new DevelopmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevelopmentServerConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDevelopmentServerConfiguration(
    data: DevelopmentServerConfigurationCreateRequest
  ): Promise<AxiosResponse<DevelopmentServerConfigurationCreateResponse>> {
    const $ = new DevelopmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDevelopmentServerConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(
    developmentServerConfigID: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new DevelopmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(developmentServerConfigID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(
    developmentServerConfigID: string
  ): Promise<AxiosResponse<DevelopmentServerConfigurationGetResponse>> {
    const $ = new DevelopmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(developmentServerConfigID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
     */
    getDevelopmentServerConfigurations,
    /**
     * Configuration name can be up to 128 characters and must conform to ^[.a-zA-Z0-9_-]+$ Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE]
     */
    createDevelopmentServerConfiguration,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE]
     */
    deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
     */
    getDevelopmentServerConfiguration_ByDevelopmentServerConfigId
  }
}
