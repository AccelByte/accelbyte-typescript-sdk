/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { GetImageDetailResponse } from './definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from './definitions/GetImageLimitResponse.js'
import { ImageConfig$ } from './endpoints/ImageConfig$.js'

export function ImageConfigApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments
   */
  async function getImagesLimit(): Promise<GetImageLimitResponse> {
    const $ = new ImageConfig$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getImagesLimit()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images.
   */
  async function getImageVersion_ByVersion(version: string): Promise<GetImageDetailResponse> {
    const $ = new ImageConfig$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getImageVersion_ByVersion(version)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getImagesLimit,
    getImageVersion_ByVersion
  }
}
