/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Caching$ } from '@od-web-sdk/generated-public/buildinfo/Caching$'
import { Network } from '@od-web-sdk/utils/Network'

export class CachingApi {
  constructor(private conf: SDKRequestConfig, private namespace: string) {}

  newInstance() {
    //  this may be expensive to cache, use cache: false
    return new Caching$(Network.create(this.conf), this.namespace, false)
  }

  getDiffCache(sourceBuildId: string, destinationBuildId: string) {
    return this.newInstance().fetchDiffCacheSourceBySourcebuildidDestByDestinationbuildid(sourceBuildId, destinationBuildId)
  }
}
