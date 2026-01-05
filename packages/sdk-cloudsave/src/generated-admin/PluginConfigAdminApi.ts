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
import { PluginRequest } from '../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../generated-definitions/PluginResponse.js'
import { PluginConfigAdmin$ } from './endpoints/PluginConfigAdmin$.js'

export function PluginConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deletePlugin(): Promise<AxiosResponse<unknown>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPlugins(): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlugins()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchPlugin(data: PluginRequest): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchPlugin(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPlugin(data: PluginRequest): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlugin(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ## Description This endpoints will delete grpc plugins configuration
     */
    deletePlugin,
    /**
     * ## Description This endpoints will get grpc plugins configuration
     */
    getPlugins,
    /**
     * ## Description This endpoints will update grpc plugins configuration
     */
    patchPlugin,
    /**
     * ## Description This endpoints will create new grpc plugins configuration per namespace
     */
    createPlugin
  }
}
