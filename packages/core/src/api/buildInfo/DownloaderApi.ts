/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { AvailablePlatform, PlatformMatchMap } from '@od-web-sdk/constants/BuildInfoApp'
import { Caching$ } from '@od-web-sdk/generated-public/buildinfo/Caching$'
import { BasicBuildManifest } from '@od-web-sdk/generated-public/buildinfo/definitions/BasicBuildManifest'
import { Downloader$ } from '@od-web-sdk/generated-public/buildinfo/Downloader$'
import { Network } from '@od-web-sdk/utils/Network'

export interface IUserPlatform {
  platform: string
  arch: string
}

export class DownloaderApi {
  constructor(private conf: SDKRequestConfig, private namespace: string) {}

  newInstance() {
    //  this may be expensive to cache, use cache: false
    return new Downloader$(Network.create(this.conf), this.namespace, false)
  }

  getAvailableBuilds(appId: string) {
    return this.newInstance().fetchAvailablebuildsByAppid(appId)
  }

  getBuildManifest(appId: string, platformId: string) {
    const axios = Network.create({ ...this.conf, timeout: 1800000 })
    return new Downloader$(axios, this.namespace, false).fetchV2UpdategameByAppidByPlatformid(appId, platformId)
  }

  getDiffCache(sourceBuildId: string, destinationBuildId: string) {
    return new Caching$(Network.create(this.conf), this.namespace, false).fetchDiffCacheSourceBySourcebuildidDestByDestinationbuildid(
      sourceBuildId,
      destinationBuildId
    )
  }

  private getCurrentPlatform(userPlatform: IUserPlatform): PlatformMatchMap | undefined {
    const devicePatform = userPlatform.platform
    const deviceArch = userPlatform.arch
    const currentPlatform = AvailablePlatform.find(
      (platform: PlatformMatchMap) => platform.platform === devicePatform && platform.arch.includes(deviceArch)
    )
    return currentPlatform
  }

  getMatchPlatform({
    buildsAvailability,
    userPlatform
  }: {
    buildsAvailability: BasicBuildManifest[]
    userPlatform: IUserPlatform
  }): string | null {
    const availablePlatformID: Set<string> = new Set()
    for (const buildAvailability of buildsAvailability) {
      if (buildAvailability.platformId) {
        availablePlatformID.add(buildAvailability.platformId)
      }
    }
    const currentMatchPlatform = this.getCurrentPlatform(userPlatform)
    if (currentMatchPlatform) {
      for (const key in currentMatchPlatform.targetPlatform) {
        if (availablePlatformID.has(currentMatchPlatform.targetPlatform[key])) {
          return currentMatchPlatform.targetPlatform[key]
        }
      }
    }
    return null
  }
}
