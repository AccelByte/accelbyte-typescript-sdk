/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DefaultLaunchProfile } from './DefaultLaunchProfile'
import { DifferentialFileManifest } from './DifferentialFileManifest'
import { ObsoleteFileManifest } from './ObsoleteFileManifest'

export const DifferentialBuildManifest = z.object({
  buildId: z.string().nullish(),
  appId: z.string().nullish(),
  platformId: z.string().nullish(),
  appSize: z.number().int().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  releaseNoteUrls: z.array(z.string()).nullish(),
  defaultLaunchProfile: DefaultLaunchProfile.nullish(),
  buildInfoVersion: z.string().nullish(),
  displayVersion: z.string().nullish(),
  files: z.array(DifferentialFileManifest).nullish(),
  obsoleteFiles: z.array(ObsoleteFileManifest).nullish()
})

export type DifferentialBuildManifest = z.TypeOf<typeof DifferentialBuildManifest>
