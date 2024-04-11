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
import { GetImageDetailResponse } from '../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../generated-definitions/GetImageLimitResponse.js'
import { ImageConfig$ } from './endpoints/ImageConfig$.js'
import { ListImageResponse } from '../generated-definitions/ListImageResponse.js'

export function ImageConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required
   */
  async function getImages(queryParams?: {
    count?: number
    offset?: number
    q?: string | null
    sortBy?: 'createdAt' | 'updatedAt' | 'version'
    sortDirection?: 'asc' | 'desc'
  }): Promise<ListImageResponse> {
    const $ = new ImageConfig$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getImages(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments
   */
  async function getImagesLimit(): Promise<GetImageLimitResponse> {
    const $ = new ImageConfig$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getImagesLimit()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  async function getImageVersion_ByVersion(version: string): Promise<GetImageDetailResponse> {
    const $ = new ImageConfig$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.getImageVersion_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getImages,
    getImagesLimit,
    getImageVersion_ByVersion
  }
}
