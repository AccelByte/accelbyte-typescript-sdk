/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TransactionAmountDetails = z.object({
  origin: z.string().nullish(),
  amount: z.number().int().nullish(),
  walletId: z.string().nullish(),
  expireAt: z.string().nullish()
})

export type TransactionAmountDetails = z.TypeOf<typeof TransactionAmountDetails>
