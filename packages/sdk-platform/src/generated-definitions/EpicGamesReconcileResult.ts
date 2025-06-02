/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EpicGamesReconcileResult = z.object({
  epicGamesItemId: z.string().nullish(),
  itemId: z.string().nullish(),
  sku: z.string().nullish(),
  status: z.enum(['FAILED', 'FULFILLED', 'PARTIAL_REVOKED', 'REVOKED', 'REVOKE_FAILED', 'VERIFIED']).nullish(),
  transactionId: z.string().nullish()
})

export interface EpicGamesReconcileResult extends z.TypeOf<typeof EpicGamesReconcileResult> {}
