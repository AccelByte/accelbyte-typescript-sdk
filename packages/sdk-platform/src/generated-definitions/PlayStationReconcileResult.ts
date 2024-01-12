/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationReconcileResult = z.object({
  itemId: z.string().nullish(),
  psnItemId: z.string().nullish(),
  sku: z.string().nullish(),
  status: z.enum(['FAILED', 'FULFILLED', 'VERIFIED']).nullish(),
  transactionId: z.string().nullish()
})

export interface PlayStationReconcileResult extends z.TypeOf<typeof PlayStationReconcileResult> {}
