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
import { NamespaceInfoArray } from '../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceSimpleInfo } from '../generated-definitions/NamespaceSimpleInfo.js'
import { Namespace$ } from './endpoints/Namespace$.js'

export function NamespaceApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<AxiosResponse<NamespaceInfoArray>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespaces(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getNamespace_ByNamespace(): Promise<AxiosResponse<NamespaceSimpleInfo>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespace_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPublisher(): Promise<AxiosResponse<NamespacePublisherInfo>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisher()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt;
     */
    getNamespaces,
    /**
     * Get a namespace info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace info&lt;/li&gt;&lt;/ul&gt;
     */
    getNamespace_ByNamespace,
    /**
     * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt;
     */
    getPublisher
  }
}
