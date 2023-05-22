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
  appId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  appType: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  buildId: z.string().nullish(),
  buildInfoVersion: z.string().nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(FileManifest).nullish(),
  gameAppId: z.string().nullish(),
  launchArguments: z.string().nullish(),
  obsoleteFiles: z.array(ObsoleteFileManifest).nullish(),
  platformId: z.string().nullish(),
  releaseNoteUrls: z.array(z.string()).nullish()
})

export interface BuildManifest extends z.TypeOf<typeof BuildManifest> {}
