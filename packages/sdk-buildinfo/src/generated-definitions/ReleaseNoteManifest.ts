/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReleaseNoteLocalizationDto } from './ReleaseNoteLocalizationDto.js'

export const ReleaseNoteManifest = z.object({
  appId: z.string(),
  platformId: z.string(),
  releaseNoteLocalizations: z.array(ReleaseNoteLocalizationDto),
  version: z.string()
})

export interface ReleaseNoteManifest extends z.TypeOf<typeof ReleaseNoteManifest> {}
