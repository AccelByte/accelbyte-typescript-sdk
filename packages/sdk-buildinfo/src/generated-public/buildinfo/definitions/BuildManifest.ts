/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile.js'
import { FileManifest } from './FileManifest.js'
import { ObsoleteFileManifest } from './ObsoleteFileManifest.js'

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

export interface BuildManifest extends z.TypeOf<typeof BuildManifest> {}
