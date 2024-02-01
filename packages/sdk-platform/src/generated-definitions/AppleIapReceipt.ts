/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppleIapReceipt = z.object({
  excludeOldTransactions: z.boolean().nullish(),
  language: z.string().nullish(),
  productId: z.string(),
  receiptData: z.string(),
  region: z.string().nullish(),
  transactionId: z.string()
})

export interface AppleIapReceipt extends z.TypeOf<typeof AppleIapReceipt> {}
