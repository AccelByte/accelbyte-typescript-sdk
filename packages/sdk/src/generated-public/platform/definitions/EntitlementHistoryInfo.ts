/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementHistoryInfo = z.object({
  entitlementId: z.string(),
  namespace: z.string(),
  action: z.enum(['GRANT', 'UPDATE', 'DECREMENT', 'REVOKE', 'DISABLE', 'ENABLE', 'SELL_BACK']),
  operator: z.string(),
  userId: z.string(),
  useCount: z.number().int().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface EntitlementHistoryInfo extends z.TypeOf<typeof EntitlementHistoryInfo> {}
