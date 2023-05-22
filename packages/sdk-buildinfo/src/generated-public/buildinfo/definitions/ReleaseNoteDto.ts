/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ReleaseNoteLocalizationDto } from './ReleaseNoteLocalizationDto.js'

export const ReleaseNoteDto = z.object({
  appId: z.string(),
  baseUrls: z.array(z.string()),
  createdAt: z.string().nullish(),
  namespace: z.string(),
  platformId: z.string(),
  releaseNoteLocalizations: z.array(ReleaseNoteLocalizationDto),
  updatedAt: z.string().nullish(),
  version: z.string()
})

export interface ReleaseNoteDto extends z.TypeOf<typeof ReleaseNoteDto> {}
