/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigAlertResponse = z.object({
  createdAt: z.string(),
  durationDays: z.number().int(),
  namespace: z.string(),
  updatedAt: z.string()
})

export interface ConfigAlertResponse extends z.TypeOf<typeof ConfigAlertResponse> {}
