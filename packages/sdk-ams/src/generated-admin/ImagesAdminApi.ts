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
import { ImageDetails } from '../generated-definitions/ImageDetails.js'
import { ImageList } from '../generated-definitions/ImageList.js'
import { ImageStorage } from '../generated-definitions/ImageStorage.js'
import { ImageUpdate } from '../generated-definitions/ImageUpdate.js'
import { ImagesAdmin$ } from './endpoints/ImagesAdmin$.js'

export function ImagesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getImages(queryParams?: {
    count?: number
    inUse?: string | null
    isProtected?: boolean | null
    name?: string | null
    offset?: number
    sortBy?: string | null
    sortDirection?: string | null
    status?: string | null
    tag?: string | null
  }): Promise<AxiosResponse<ImageList>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImages(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImagesStorage(): Promise<AxiosResponse<ImageStorage>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImagesStorage()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteImage_ByImageId(imageID: string): Promise<AxiosResponse<unknown>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteImage_ByImageId(imageID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getImage_ByImageId(imageID: string): Promise<AxiosResponse<ImageDetails>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImage_ByImageId(imageID)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchImage_ByImageId(imageID: string, data: ImageUpdate): Promise<AxiosResponse<ImageDetails>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchImage_ByImageId(imageID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRestore_ByImageId(imageID: string): Promise<AxiosResponse<unknown>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRestore_ByImageId(imageID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Returns images which exist (uploaded, uploading, or building) in the linked account. This route fails if no account is linked Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
     */
    getImages,
    /**
     * Returns information regarding the account&#39;s usage for images storage including the free tier quota Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
     */
    getImagesStorage,
    /**
     * Marks an image for deletion. The image will stop being available for fleets and will eventually be deleted. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
     */
    deleteImage_ByImageId,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
     */
    getImage_ByImageId,
    /**
     * This allows editing of the image name, toggling `IsProtected`, or adding &amp; removal of tags Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [UPDATE]
     */
    patchImage_ByImageId,
    /**
     * Unmarks an image for deletion. The image will be available for fleets. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
     */
    createRestore_ByImageId
  }
}
