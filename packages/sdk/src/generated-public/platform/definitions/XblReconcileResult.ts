/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const XblReconcileResult = z.object({
  transactionId: z.string().nullish(),
  xboxProductId: z.string().nullish(),
  itemId: z.string().nullish(),
  sku: z.string().nullish(),
  iapOrderStatus: z.enum(['VERIFIED', 'FULFILLED', 'FAILED']).nullish()
})

export interface XblReconcileResult extends z.TypeOf<typeof XblReconcileResult> {}
