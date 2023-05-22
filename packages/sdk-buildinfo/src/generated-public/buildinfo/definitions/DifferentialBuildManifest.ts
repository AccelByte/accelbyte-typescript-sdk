/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile.js'
import { DifferentialFileManifest } from './DifferentialFileManifest.js'
import { ObsoleteFileManifest } from './ObsoleteFileManifest.js'

export const DifferentialBuildManifest = z.object({
  appId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  buildId: z.string().nullish(),
  buildInfoVersion: z.string().nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(DifferentialFileManifest).nullish(),
  obsoleteFiles: z.array(ObsoleteFileManifest).nullish(),
  platformId: z.string().nullish(),
  releaseNoteUrls: z.array(z.string()).nullish()
})

export interface DifferentialBuildManifest extends z.TypeOf<typeof DifferentialBuildManifest> {}
