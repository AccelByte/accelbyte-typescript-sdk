/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapReceipt = z.object({
  autoAck: z.boolean().nullish(),
  language: z.string().nullish(),
  orderId: z.string(),
  packageName: z.string(),
  productId: z.string(),
  purchaseTime: z.number().int(),
  purchaseToken: z.string(),
  region: z.string().nullish()
})

export interface GoogleIapReceipt extends z.TypeOf<typeof GoogleIapReceipt> {}
