/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile.js'
import { FileManifest } from './FileManifest.js'

export const UploadBuildManifest = z.object({
  appId: z.string().nullish(),
  appType: z.string().nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(FileManifest).nullish(),
  gameAppId: z.string().nullish(),
  launchArguments: z.string().nullish(),
  platformId: z.string().nullish()
})

export interface UploadBuildManifest extends z.TypeOf<typeof UploadBuildManifest> {}
