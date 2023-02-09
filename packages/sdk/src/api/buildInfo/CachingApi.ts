/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * This API is used to retrieve detailed diff cache.<br/>The response will contains list of diff cache files along with its download url.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>
   */
  getDiffCache(sourceBuildId: string, destinationBuildId: string) {
    return this.newInstance().fetchNsDiffCacheSourceBySourcebuildidDestByDestinationbuildid(sourceBuildId, destinationBuildId)
  }

  private newInstance() {
    //  this is expensive to cache, apply "cache: false"
    return new Caching$(Network.create(this.conf), this.namespace, false)
  }
}
