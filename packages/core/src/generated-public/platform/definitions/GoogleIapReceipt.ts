/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapReceipt = z.object({
  orderId: z.string(),
  packageName: z.string(),
  productId: z.string(),
  purchaseTime: z.number().int(),
  purchaseToken: z.string(),
  autoAck: z.boolean().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish()
})

export type GoogleIapReceipt = z.TypeOf<typeof GoogleIapReceipt>
