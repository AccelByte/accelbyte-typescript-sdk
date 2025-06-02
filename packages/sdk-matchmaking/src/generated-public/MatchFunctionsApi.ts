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
import { ListMatchFunctionsResponse } from '../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../generated-definitions/MatchFunctionRequest.js'
import { MatchFunctions$ } from './endpoints/MatchFunctions$.js'

export function MatchFunctionsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getMatchFunctions(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<ListMatchFunctionsResponse>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchFunctions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createMatchFunction(data: MatchFunctionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMatchFunction(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteMatchFunction_ByName(name: string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMatchFunction_ByName(name)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getMatchFunction_ByName(name: string): Promise<AxiosResponse<MatchFunctionConfig>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchFunction_ByName(name)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateMatchFunction_ByName(name: string, data: MatchFunctionRequest): Promise<AxiosResponse<MatchFunctionConfig>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMatchFunction_ByName(name, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * List existing match functions.
     */
    getMatchFunctions,
    /**
     * Creates a new matchmaking function.
     */
    createMatchFunction,
    /**
     * Deletes an existing match function.
     */
    deleteMatchFunction_ByName,
    /**
     * Get custom match function by name.
     */
    getMatchFunction_ByName,
    /**
     * Update existing matchmaking function.
     */
    updateMatchFunction_ByName
  }
}
