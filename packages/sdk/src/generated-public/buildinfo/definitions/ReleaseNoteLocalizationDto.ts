/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ReleaseNoteLocalizationDto = z.object({ lang: z.string(), uuid: z.string() })

export type ReleaseNoteLocalizationDto = z.TypeOf<typeof ReleaseNoteLocalizationDto>
