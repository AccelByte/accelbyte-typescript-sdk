/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { GetImageDetailResponse } from '../../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../../generated-definitions/GetImageLimitResponse.js'
import { ListImageResponse } from '../../generated-definitions/ListImageResponse.js'

export class ImageConfig$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
   */
  getImages(queryParams?: {
    count?: number
    offset?: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<Response<ListImageResponse>> {
    const params = { count: 50, sortBy: 'createdAt', sortDirection: 'asc', ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListImageResponse, 'ListImageResponse')
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments
   */
  getImagesLimit(): Promise<Response<GetImageLimitResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images/limit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetImageLimitResponse, 'GetImageLimitResponse')
  }
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  getImageVersion_ByVersion(version: string): Promise<Response<GetImageDetailResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/namespaces/{namespace}/images/versions/{version}'
      .replace('{namespace}', this.namespace)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetImageDetailResponse,
      'GetImageDetailResponse'
    )
  }
}
