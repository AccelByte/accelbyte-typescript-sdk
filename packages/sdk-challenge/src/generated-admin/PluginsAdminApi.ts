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
import { PluginAssignmentRequest } from '../generated-definitions/PluginAssignmentRequest.js'
import { PluginAssignmentResponse } from '../generated-definitions/PluginAssignmentResponse.js'
import { PluginsAdmin$ } from './endpoints/PluginsAdmin$.js'

export function PluginsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deletePluginAssignment(): Promise<AxiosResponse<unknown>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePluginAssignment()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPluginsAssignment(): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPluginsAssignment()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPluginAssignment(data: PluginAssignmentRequest): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPluginAssignment(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePluginAssignment(data: PluginAssignmentRequest): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePluginAssignment(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [DELETE]&lt;/li&gt;&lt;/ul&gt;
     */
    deletePluginAssignment,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [READ]&lt;/li&gt;&lt;/ul&gt;
     */
    getPluginsAssignment,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [CREATE]&lt;/li&gt;&lt;/ul&gt;
     */
    createPluginAssignment,
    /**
     * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [UPDATE]&lt;/li&gt;&lt;/ul&gt;
     */
    updatePluginAssignment
  }
}
