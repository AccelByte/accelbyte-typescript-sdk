/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationWithTemplateRequestV1 = z.object({
  templateContext: z.record(z.string()),
  templateLanguage: z.string(),
  templateSlug: z.string(),
  topicName: z.string()
})

export interface NotificationWithTemplateRequestV1 extends z.TypeOf<typeof NotificationWithTemplateRequestV1> {}
