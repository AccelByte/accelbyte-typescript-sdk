/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { AvailablePlatform, PlatformMatchMap } from '@accelbyte/sdk/constants/BuildInfoApp'
import { Caching$ } from '@accelbyte/sdk/generated-public/buildinfo/Caching$'
import { BasicBuildManifest } from '@accelbyte/sdk/generated-public/buildinfo/definitions/BasicBuildManifest'
import { Downloader$ } from '@accelbyte/sdk/generated-public/buildinfo/Downloader$'
import { Network } from '@accelbyte/sdk/utils/Network'

export interface IUserPlatform {
  platform: string
  arch: string
}

export class DownloaderApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string) {}

  /**
   * GET [/buildinfo/public/namespaces/{namespace}/availablebuilds/{appId}](api)
   *
   * This API is used to get simple build manifest that contains list of current build in various platform.
   *
   * - _Required permission_: login user
   * - _Returns_: build manifest
   */
  getAvailableBuilds = (appId: string) => {
    return this.newInstance().fetchNsAvailablebuildsByAppid(appId)
  }

  /**
   * GET [/buildinfo/public/namespaces/{namespace}/v2/updategame/{appId}/{platformId}](api)
   *
   * This API is used to get build manifest of release version of the application.
   *
   * - _Required permission_: login user
   * - _Returns_: build manifest
   */
  getBuildManifest = (appId: string, platformId: string) => {
    const axios = Network.create({ ...this.conf, timeout: 1800000 })
    return new Downloader$(axios, this.namespace, false).fetchNsV2UpdategameByAppidByPlatformid(appId, platformId)
  }

  /**
   * GET [/buildinfo/public/namespaces/{namespace}/diff/cache/source/{sourceBuildId}/dest/{destinationBuildId}](api)
   *
   * This API is used to retrieve detailed diff cache.
   * The response will contains list of diff cache files along with its download url.
   *
   * - _Required permission_: login user
   */
  getDiffCache = (sourceBuildId: string, destinationBuildId: string) => {
    return new Caching$(Network.create(this.conf), this.namespace, false).fetchNsDiffCacheSourceBySourcebuildidDestByDestinationbuildid(
      sourceBuildId,
      destinationBuildId
    )
  }

  /**
   * Check which platform is available for the user to download the game
   *
   * @internal
   */
  getMatchPlatform = ({
    buildsAvailability,
    userPlatform
  }: {
    buildsAvailability: BasicBuildManifest[]
    userPlatform: IUserPlatform
  }): string | null => {
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

  /**
   * @internal
   */
  getCurrentPlatform = (userPlatform: IUserPlatform): PlatformMatchMap | undefined => {
    const devicePlatform = userPlatform.platform
    const deviceArch = userPlatform.arch
    const currentPlatform = AvailablePlatform.find(
      (platform: PlatformMatchMap) => platform.platform === devicePlatform && platform.arch.includes(deviceArch)
    )
    return currentPlatform
  }

  private newInstance() {
    //  this is be expensive to cache, apply "cache: false"
    return new Downloader$(Network.create(this.conf), this.namespace, false)
  }
}
