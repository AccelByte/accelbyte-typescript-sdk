/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NotificationProcessResult = z.object({
  code: z.string().nullish(),
  customParam: z.record(z.any()).nullish(),
  severity: z.number().int().nullish(),
  status: z.enum(['ERROR', 'IGNORED', 'PROCESSED', 'WARN']).nullish()
})

export interface NotificationProcessResult extends z.TypeOf<typeof NotificationProcessResult> {}
