/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CreateImagePatchRequest } from '../generated-definitions/CreateImagePatchRequest.js'
import { CreateImageRequest } from '../generated-definitions/CreateImageRequest.js'
import { CreateRepositoryRequest } from '../generated-definitions/CreateRepositoryRequest.js'
import { GetImageDetailResponse } from '../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../generated-definitions/GetImageLimitResponse.js'
import { GetImagePatchDetailResponse } from '../generated-definitions/GetImagePatchDetailResponse.js'
import { ImageConfigAdmin$ } from './endpoints/ImageConfigAdmin$.js'
import { ImageRecordUpdate } from '../generated-definitions/ImageRecordUpdate.js'
import { ListImagePatchesResponse } from '../generated-definitions/ListImagePatchesResponse.js'
import { ListImageResponse } from '../generated-definitions/ListImageResponse.js'
import { RepositoryRecord } from '../generated-definitions/RepositoryRecord.js'

export function ImageConfigAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
   */
  async function createImage(data: CreateImageRequest): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createImage(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will update an image name and/or image persistent flag. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0&#34;, &#34;persistent&#34;:false } ```
   */
  async function updateImage(data: ImageRecordUpdate): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateImage(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image repository. Sample repository: { &#34;namespace&#34;:&#34;testing&#34;, &#34;repository&#34;:&#34;ds-testing-924623&#34;, } ```
   */
  async function createRepository(data: CreateRepositoryRequest): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createRepository(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint will create image patch. Sample image: { &#34;namespace&#34;:&#34;dewa&#34;, &#34;version&#34;:&#34;1.0.0&#34;, &#34;patchVersion&#34;:&#34;1.0.0-patch&#34;, &#34;image&#34;:&#34;144436415367.dkr.ecr.us-west-2.amazonaws.com/dewa:1.0.0-patch&#34;, &#34;persistent&#34;:false } ```
   */
  async function createImagePatche(data: CreateImagePatchRequest): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createImagePatche(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social. This endpoint will delete an image that specified in the request parameter. Default image is cannot be deleted and will throw error 422 (Unprocessable entity).
   */
  async function deleteImage(queryParams: { imageURI: string | null; version: string | null }): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteImage(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
   */
  async function getImages(queryParams: {
    count: number
    offset: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<ListImageResponse> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getImages(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated servers repository name in a namespace.
   */
  async function getRepository(): Promise<RepositoryRecord> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getRepository()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get ds image limit for specific namespace
   */
  async function getImagesLimit(): Promise<GetImageLimitResponse> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getImagesLimit()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [UPDATE] Required scope: social This endpoint will delete an image patch that specified in the request parameter
   */
  async function deleteImagePatche(queryParams: {
    imageURI: string | null
    version: string | null
    versionPatch: string | null
  }): Promise<unknown> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteImagePatche(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  async function getImageVersion_ByVersion(version: string): Promise<GetImageDetailResponse> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getImageVersion_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get image patches by version. Image Size unit is byte.
   */
  async function getPatchesImages_ByVersion(version: string): Promise<ListImagePatchesResponse> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPatchesImages_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific image patch version of dedicated servers version.
   */
  async function getPatcheImage_ByVersion_ByVersionPatch(version: string, versionPatch: string): Promise<GetImagePatchDetailResponse> {
    const $ = new ImageConfigAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPatcheImage_ByVersion_ByVersionPatch(version, versionPatch)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createImage,
    updateImage,
    createRepository,
    createImagePatche,
    deleteImage,
    getImages,
    getRepository,
    getImagesLimit,
    deleteImagePatche,
    getImageVersion_ByVersion,
    getPatchesImages_ByVersion,
    getPatcheImage_ByVersion_ByVersionPatch
  }
}
