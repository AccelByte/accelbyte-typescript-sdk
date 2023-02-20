/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Caching$ } from '@accelbyte/sdk/generated-public/buildinfo/Caching$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class CachingApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string) {}

  /**
   * GET [/buildinfo/public/namespaces/{namespace}/diff/cache/source/{sourceBuildId}/dest/{destinationBuildId}](api)
   *
   * This API is used to retrieve detailed diff cache.
   * The response will contains list of diff cache files along with its download url.
   *
   * _Required permission_: login user
   */
  getDiffCache = (sourceBuildId: string, destinationBuildId: string) => {
    return this.newInstance().fetchNsDiffCacheSourceBySourcebuildidDestByDestinationbuildid(sourceBuildId, destinationBuildId)
  }

  private newInstance() {
    //  this is expensive to cache, apply "cache: false"
    return new Caching$(Network.create(this.conf), this.namespace, false)
  }
}
