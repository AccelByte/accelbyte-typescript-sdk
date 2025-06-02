/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TemplateContent } from './TemplateContent.js'

export const TemplateLocalization = z.object({
  lastDraftAt: z.string(),
  lastPublishedAt: z.string(),
  templateContent: TemplateContent,
  templateLanguage: z.string(),
  templateSlug: z.string()
})

export interface TemplateLocalization extends z.TypeOf<typeof TemplateLocalization> {}
