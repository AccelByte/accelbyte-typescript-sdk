/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const TemplateResponse = z.object({ localizations: z.array(Localization), templateSlug: z.string() })

export interface TemplateResponse extends z.TypeOf<typeof TemplateResponse> {}
