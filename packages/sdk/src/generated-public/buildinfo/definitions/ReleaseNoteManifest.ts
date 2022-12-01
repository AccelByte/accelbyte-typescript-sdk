/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReleaseNoteLocalizationDto } from './ReleaseNoteLocalizationDto'

export const ReleaseNoteManifest = z.object({
  appId: z.string(),
  platformId: z.string(),
  version: z.string(),
  releaseNoteLocalizations: z.array(ReleaseNoteLocalizationDto)
})

export type ReleaseNoteManifest = z.TypeOf<typeof ReleaseNoteManifest>
