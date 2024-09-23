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
import { BulkCalculateDiffCacheRequest } from '../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CalculateDiffCacheRequest } from '../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../generated-definitions/CreateDiffCacheRequest.js'
import { CachingAdmin$ } from './endpoints/CachingAdmin$.js'

export function CachingAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createDiffCache(data: CreateDiffCacheRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CachingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffCache(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDiffCache(data: CommitDiffCacheRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CachingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDiffCache(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDiffCalculate(data: CalculateDiffCacheRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CachingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffCalculate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDiffCalculateBulk(data: BulkCalculateDiffCacheRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CachingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffCalculateBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to save detailed diff cache. Only used by differ. Not to be used directly.
     */
    createDiffCache,
    /**
     * This API is used to mark that the diff caching is complete and diff summary file uploaded to s3. Only used by differ. Not to be used directly.
     */
    updateDiffCache,
    /**
     * This API is used to dispatch diff caching request.
     */
    createDiffCalculate,
    /**
     * This API is used to bulk dispatch diff caching requests to differ instance.&lt;br/&gt;The processing order will follow the order of the array.&lt;br/&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;Request is skipped if the source and destination versions is same&lt;/li&gt;&lt;li&gt;Request is skipped if the source version is not found&lt;/li&gt;&lt;li&gt;Request is skipped if the destination version is not found&lt;/li&gt;&lt;/ul&gt;
     */
    createDiffCalculateBulk
  }
}
