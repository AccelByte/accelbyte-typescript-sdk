/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { GetImageDetailResponse } from '../definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../definitions/GetImageLimitResponse.js'
import { ListImageResponse } from '../definitions/ListImageResponse.js'

export class ImageConfig$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
   */
  getImages(queryParams?: {
    count?: number
    offset?: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<IResponseWithSync<ListImageResponse>> {
    const params = { count: 50, sortBy: 'createdAt', sortDirection: 'asc', ...queryParams } as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, ListImageResponse, 'ListImageResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments
   */
  getImagesLimit(): Promise<IResponseWithSync<GetImageLimitResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images/limit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetImageLimitResponse, 'GetImageLimitResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  getImageVersion_ByVersion(version: string): Promise<IResponseWithSync<GetImageDetailResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images/versions/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, GetImageDetailResponse, 'GetImageDetailResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
