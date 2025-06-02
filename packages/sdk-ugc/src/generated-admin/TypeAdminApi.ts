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
import { CreateTypeRequest } from '../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../generated-definitions/PaginatedGetTypeResponse.js'
import { TypeAdmin$ } from './endpoints/TypeAdmin$.js'

export function TypeAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getTypes(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<PaginatedGetTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTypes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createType(data: CreateTypeRequest): Promise<AxiosResponse<CreateTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createType(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteType_ByTypeId(typeId: string): Promise<AxiosResponse<unknown>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteType_ByTypeId(typeId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateType_ByTypeId(typeId: string, data: CreateTypeRequest): Promise<AxiosResponse<CreateTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateType_ByTypeId(typeId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get available types paginated
     */
    getTypes,
    /**
     * Creates a new type and subtype
     */
    createType,
    /**
     * Delete existing type
     */
    deleteType_ByTypeId,
    /**
     * Updates a type and subtype
     */
    updateType_ByTypeId
  }
}
