/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OculusReconcileResult = z.object({
  iapOrderStatus: z.enum(['FAILED', 'FULFILLED', 'PARTIAL_REVOKED', 'REVOKED', 'REVOKE_FAILED', 'VERIFIED']).nullish(),
  itemIdentity: z.string().nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  oculusItemSku: z.string().nullish(),
  transactionId: z.string().nullish()
})

export interface OculusReconcileResult extends z.TypeOf<typeof OculusReconcileResult> {}
