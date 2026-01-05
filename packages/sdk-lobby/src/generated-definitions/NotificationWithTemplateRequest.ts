/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationWithTemplateRequest = z.object({
  templateContext: z.record(z.string()),
  templateLanguage: z.string(),
  templateSlug: z.string(),
  topic: z.string()
})

export interface NotificationWithTemplateRequest extends z.TypeOf<typeof NotificationWithTemplateRequest> {}
