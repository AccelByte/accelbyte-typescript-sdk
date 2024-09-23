/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateImagePatchRequest } from '../../generated-definitions/CreateImagePatchRequest.js'
import { CreateImageRequest } from '../../generated-definitions/CreateImageRequest.js'
import { CreateRepositoryRequest } from '../../generated-definitions/CreateRepositoryRequest.js'
import { GetImageDetailResponse } from '../../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../../generated-definitions/GetImageLimitResponse.js'
import { GetImagePatchDetailResponse } from '../../generated-definitions/GetImagePatchDetailResponse.js'
import { ImageRecordUpdate } from '../../generated-definitions/ImageRecordUpdate.js'
import { ListImagePatchesResponse } from '../../generated-definitions/ListImagePatchesResponse.js'
import { ListImageResponse } from '../../generated-definitions/ListImageResponse.js'
import { RepositoryRecord } from '../../generated-definitions/RepositoryRecord.js'

export class ImageConfigAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
   */
  createImage(data: CreateImageRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/images'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will update an image name and/or image persistent flag. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
   */
  updateImage(data: ImageRecordUpdate): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/images'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image repository. Sample repository: { &#34;namespace&#34;:&#34;testing&#34;, &#34;repository&#34;:&#34;ds-testing-924623&#34;, } ```
   */
  createRepository(data: CreateRepositoryRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/repository'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image patch. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;patchVersion&#34;:&#34;1.0.0-patch&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0-patch&#34;, &#34;persistent&#34;:false } ```
   */
  createImagePatche(data: CreateImagePatchRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/images/patches'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social. This endpoint will delete an image that specified in the request parameter. Default image is cannot be deleted and will throw error 422 (Unprocessable entity).
   */
  deleteImage(queryParams: { imageURI: string | null; version: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
   */
  getImages(queryParams: {
    count: number
    offset: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<Response<ListImageResponse>> {
    const params = { sortBy: 'createdAt', sortDirection: 'asc', ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ListImageResponse, 'ListImageResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers repository name in a namespace.
   */
  getRepository(): Promise<Response<RepositoryRecord>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/repository'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, RepositoryRecord, 'RepositoryRecord')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get ds image limit for specific namespace
   */
  getImagesLimit(): Promise<Response<GetImageLimitResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images/limit'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetImageLimitResponse, 'GetImageLimitResponse')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will delete an image patch that specified in the request parameter
   */
  deleteImagePatche(queryParams: {
    imageURI: string | null
    version: string | null
    versionPatch: string | null
  }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images/patches'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  getImageVersion_ByVersion(version: string): Promise<Response<GetImageDetailResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images/versions/{version}'
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
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get image patches by version. Image Size unit is byte.
   */
  getPatchesImages_ByVersion(version: string): Promise<Response<ListImagePatchesResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images/versions/{version}/patches'
      .replace('{namespace}', this.namespace)
      .replace('{version}', version)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListImagePatchesResponse,
      'ListImagePatchesResponse'
    )
  }
  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific image patch version of dedicated servers version.
   */
  getPatcheImage_ByVersion_ByVersionPatch(version: string, versionPatch: string): Promise<Response<GetImagePatchDetailResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/dsmcontroller/admin/namespaces/{namespace}/images/versions/{version}/patches/{versionPatch}'
      .replace('{namespace}', this.namespace)
      .replace('{version}', version)
      .replace('{versionPatch}', versionPatch)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetImagePatchDetailResponse,
      'GetImagePatchDetailResponse'
    )
  }
}
