/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementHistoryInfo = z.object({
  action: z.enum(['DECREMENT', 'DISABLE', 'ENABLE', 'GRANT', 'REVOKE', 'SELL_BACK', 'UPDATE']),
  createdAt: z.string(),
  entitlementId: z.string(),
  namespace: z.string(),
  operator: z.string(),
  reason: z.string().nullish(),
  updatedAt: z.string(),
  useCount: z.number().int().nullish(),
  useCountChange: z.number().int().nullish(),
  userId: z.string()
})

export interface EntitlementHistoryInfo extends z.TypeOf<typeof EntitlementHistoryInfo> {}
