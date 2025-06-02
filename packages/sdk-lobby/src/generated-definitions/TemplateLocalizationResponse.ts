/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TemplateLocalization } from './TemplateLocalization.js'

export const TemplateLocalizationResponse = z.object({
  first: z.string(),
  last: z.string(),
  next: z.string(),
  previous: z.string(),
  templateLocalization: z.array(TemplateLocalization)
})

export interface TemplateLocalizationResponse extends z.TypeOf<typeof TemplateLocalizationResponse> {}
