/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationReconcileResult = z.object({
  transactionId: z.string().nullish(),
  psnItemId: z.string().nullish(),
  itemId: z.string().nullish(),
  sku: z.string().nullish(),
  status: z.enum(['VERIFIED', 'FULFILLED', 'FAILED']).nullish()
})

export type PlayStationReconcileResult = z.TypeOf<typeof PlayStationReconcileResult>
