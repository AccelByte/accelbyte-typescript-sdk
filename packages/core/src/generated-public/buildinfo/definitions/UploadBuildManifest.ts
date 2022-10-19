/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile'
import { FileManifest } from './FileManifest'

export const UploadBuildManifest = z.object({
  appId: z.string().nullish(),
  platformId: z.string().nullish(),
  gameAppId: z.string().nullish(),
  appType: z.string().nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  launchArguments: z.string().nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(FileManifest).nullish()
})

export type UploadBuildManifest = z.TypeOf<typeof UploadBuildManifest>
