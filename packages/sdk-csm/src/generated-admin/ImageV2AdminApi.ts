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
import { DeleteAppImagesV1Request } from '../generated-definitions/DeleteAppImagesV1Request.js'
import { GetAppImageListV2Response } from '../generated-definitions/GetAppImageListV2Response.js'
import { ImageV2Admin$ } from './endpoints/ImageV2Admin$.js'

export function ImageV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteImage_ByApp_v2(app: string, data: DeleteAppImagesV1Request): Promise<AxiosResponse<unknown>> {
    const $ = new ImageV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteImage_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImages_ByApp_v2(
    app: string,
    queryParams?: { cached?: string | null }
  ): Promise<AxiosResponse<GetAppImageListV2Response>> {
    const $ = new ImageV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImages_ByApp_v2(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [DELETE]&lt;/code&gt; Deletes list of provided image tags from the app image repository
     */
    deleteImage_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [READ]&lt;/code&gt; Get a list of container images Default &#39;cached&#39; parameter is &#39;true&#39;
     */
    getImages_ByApp_v2
  }
}
