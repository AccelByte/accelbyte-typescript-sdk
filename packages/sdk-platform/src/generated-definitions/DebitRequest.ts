/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebitRequest = z.object({
  amount: z.number().int(),
  balanceSource: z.enum(['DLC_REVOCATION', 'EXPIRATION', 'IAP_REVOCATION', 'ORDER_REVOCATION', 'OTHER', 'PAYMENT', 'TRADE']).nullish(),
  metadata: z.record(z.any()).nullish(),
  reason: z.string().nullish()
})

export interface DebitRequest extends z.TypeOf<typeof DebitRequest> {}
