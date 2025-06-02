/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblReconcileResult = z.object({
  iapOrderStatus: z.enum(['FAILED', 'FULFILLED', 'PARTIAL_REVOKED', 'REVOKED', 'REVOKE_FAILED', 'VERIFIED']).nullish(),
  itemId: z.string().nullish(),
  sku: z.string().nullish(),
  transactionId: z.string().nullish(),
  xboxProductId: z.string().nullish()
})

export interface XblReconcileResult extends z.TypeOf<typeof XblReconcileResult> {}
