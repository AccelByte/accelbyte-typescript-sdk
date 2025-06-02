/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitByWalletPlatformRequest = z.object({
  amount: z.number().int(),
  debitBalanceSource: z.enum(['DLC_REVOCATION', 'EXPIRATION', 'IAP_REVOCATION', 'ORDER_REVOCATION', 'OTHER', 'PAYMENT', 'TRADE']).nullish(),
  metadata: z.record(z.any()).nullish(),
  reason: z.string().nullish(),
  walletPlatform: z.enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'Xbox']).nullish()
})

export interface DebitByWalletPlatformRequest extends z.TypeOf<typeof DebitByWalletPlatformRequest> {}
