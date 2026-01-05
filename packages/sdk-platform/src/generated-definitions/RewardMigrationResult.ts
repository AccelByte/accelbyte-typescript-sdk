/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RewardMigrationResult = z.object({
  itemId: z.string().nullish(),
  quantity: z.number().int().nullish(),
  reason: z.string().nullish(),
  sku: z.string().nullish(),
  status: z.enum(['FAIL', 'SUCCESS']).nullish(),
  syncedCount: z.number().int().nullish(),
  syncedEntitlementIds: z.array(z.string()).nullish()
})

export interface RewardMigrationResult extends z.TypeOf<typeof RewardMigrationResult> {}
