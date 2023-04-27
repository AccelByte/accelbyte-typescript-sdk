/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReleaseNoteLocalizationDto } from './ReleaseNoteLocalizationDto.js'

export const ReleaseNoteDto = z.object({
  namespace: z.string(),
  appId: z.string(),
  platformId: z.string(),
  version: z.string(),
  baseUrls: z.array(z.string()),
  releaseNoteLocalizations: z.array(ReleaseNoteLocalizationDto),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface ReleaseNoteDto extends z.TypeOf<typeof ReleaseNoteDto> {}
