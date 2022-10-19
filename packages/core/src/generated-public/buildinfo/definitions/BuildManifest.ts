/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile'
import { FileManifest } from './FileManifest'
import { ObsoleteFileManifest } from './ObsoleteFileManifest'

export const BuildManifest = z.object({
  buildId: z.string().nullish(),
  appId: z.string().nullish(),
  platformId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  releaseNoteUrls: z.array(z.string()).nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  buildInfoVersion: z.string().nullish(),
  gameAppId: z.string().nullish(),
  appType: z.string().nullish(),
  launchArguments: z.string().nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(FileManifest).nullish(),
  obsoleteFiles: z.array(ObsoleteFileManifest).nullish()
})

export type BuildManifest = z.TypeOf<typeof BuildManifest>
