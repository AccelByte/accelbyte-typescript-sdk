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
import { CreateImagePatchRequest } from '../generated-definitions/CreateImagePatchRequest.js'
import { CreateImageRequest } from '../generated-definitions/CreateImageRequest.js'
import { CreateRepositoryRequest } from '../generated-definitions/CreateRepositoryRequest.js'
import { GetImageDetailResponse } from '../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../generated-definitions/GetImageLimitResponse.js'
import { GetImagePatchDetailResponse } from '../generated-definitions/GetImagePatchDetailResponse.js'
import { ImageRecordUpdate } from '../generated-definitions/ImageRecordUpdate.js'
import { ListImagePatchesResponse } from '../generated-definitions/ListImagePatchesResponse.js'
import { ListImageResponse } from '../generated-definitions/ListImageResponse.js'
import { RepositoryRecord } from '../generated-definitions/RepositoryRecord.js'
import { ImageConfigAdmin$ } from './endpoints/ImageConfigAdmin$.js'

export function ImageConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createImage(data: CreateImageRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createImage(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateImage(data: ImageRecordUpdate): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateImage(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRepository(data: CreateRepositoryRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRepository(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createImagePatche(data: CreateImagePatchRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createImagePatche(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteImage(queryParams: { imageURI: string | null; version: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteImage(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImages(queryParams: {
    count: number
    offset: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<AxiosResponse<ListImageResponse>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImages(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRepository(): Promise<AxiosResponse<RepositoryRecord>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRepository()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImagesLimit(): Promise<AxiosResponse<GetImageLimitResponse>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImagesLimit()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteImagePatche(queryParams: {
    imageURI: string | null
    version: string | null
    versionPatch: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteImagePatche(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImageVersion_ByVersion(version: string): Promise<AxiosResponse<GetImageDetailResponse>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImageVersion_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPatchesImages_ByVersion(version: string): Promise<AxiosResponse<ListImagePatchesResponse>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPatchesImages_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPatcheImage_ByVersion_ByVersionPatch(
    version: string,
    versionPatch: string
  ): Promise<AxiosResponse<GetImagePatchDetailResponse>> {
    const $ = new ImageConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPatcheImage_ByVersion_ByVersionPatch(version, versionPatch)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
     */
    createImage,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will update an image name and/or image persistent flag. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
     */
    updateImage,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image repository. Sample repository: { &#34;namespace&#34;:&#34;testing&#34;, &#34;repository&#34;:&#34;ds-testing-924623&#34;, } ```
     */
    createRepository,
    /**
     * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image patch. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;patchVersion&#34;:&#34;1.0.0-patch&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0-patch&#34;, &#34;persistent&#34;:false } ```
     */
    createImagePatche,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social. This endpoint will delete an image that specified in the request parameter. Default image is cannot be deleted and will throw error 422 (Unprocessable entity).
     */
    deleteImage,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
     */
    getImages,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers repository name in a namespace.
     */
    getRepository,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get ds image limit for specific namespace
     */
    getImagesLimit,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will delete an image patch that specified in the request parameter
     */
    deleteImagePatche,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
     */
    getImageVersion_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get image patches by version. Image Size unit is byte.
     */
    getPatchesImages_ByVersion,
    /**
     * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific image patch version of dedicated servers version.
     */
    getPatcheImage_ByVersion_ByVersionPatch
  }
}
