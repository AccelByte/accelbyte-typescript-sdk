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
import { FileUploadUrlInfo } from '../generated-definitions/FileUploadUrlInfo.js'
import { FileUpload$ } from './endpoints/FileUpload$.js'

export function FileUploadApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createFile_ByUserId(
    userId: string,
    queryParams: { fileType: string | null; category?: string | null }
  ): Promise<AxiosResponse<FileUploadUrlInfo>> {
    const $ = new FileUpload$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFile_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createFile_ByFolder(folder: string, queryParams: { fileType: string | null }): Promise<AxiosResponse<FileUploadUrlInfo>> {
    const $ = new FileUpload$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFile_ByFolder(folder, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are two types of storage limits per user: maximum file count and maximum total file size.&lt;br/&gt;These limits vary depending on the upload category used.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;1. Default category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 10 files&lt;br/&gt;- Maximum total file size per user: 100MB&lt;br/&gt;&lt;b&gt;2. Reporting category:&lt;/b&gt;&lt;br/&gt;- Maximum file count per user: 3 files every 1 hour&lt;br/&gt;- Maximum total file size per user: 30MB every 1 hour&lt;br/&gt;&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
     */
    createFile_ByUserId,
    /**
     * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt;
     */
    createFile_ByFolder
  }
}
