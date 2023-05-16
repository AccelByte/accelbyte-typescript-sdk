/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BasicBuildManifest } from '../../generated-public/buildinfo/definitions/BasicBuildManifest.js'
import { AvailablePlatform, PlatformMatchMap } from './BuildInfoApp.js'

/**
 * @deprecated, this is the original *Api class
 */
export interface IUserPlatform {
  platform: string
  arch: string
}

export class BuildinfoDownloaderClient {
  /**
   * Check which platform is available for the user to download the game
   *
   * @internal
   */
  static getMatchPlatform = (buildsAvailability: BasicBuildManifest[], userPlatform: IUserPlatform): string | null => {
    const availablePlatformID: Set<string> = new Set()
    for (const buildAvailability of buildsAvailability) {
      if (buildAvailability.platformId) {
        availablePlatformID.add(buildAvailability.platformId)
      }
    }
    const currentMatchPlatform = BuildinfoDownloaderClient.getCurrentPlatform(userPlatform)
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
  static getCurrentPlatform = (userPlatform: IUserPlatform): PlatformMatchMap | undefined => {
    const devicePlatform = userPlatform.platform
    const deviceArch = userPlatform.arch
    const currentPlatform = AvailablePlatform.find(
      (platform: PlatformMatchMap) => platform.platform === devicePlatform && platform.arch.includes(deviceArch)
    )
    return currentPlatform
  }
}
