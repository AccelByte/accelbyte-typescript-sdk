/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GoogleIapReceipt = z.object({
  autoAck: z.boolean().nullish(),
  autoConsume: z.boolean().nullish(),
  language: z.string().nullish(),
  orderId: z.string(),
  packageName: z.string(),
  productId: z.string().nullish(),
  purchaseTime: z.number().int().nullish(),
  purchaseToken: z.string(),
  region: z.string().nullish(),
  subscriptionPurchase: z.boolean().nullish()
})

export interface GoogleIapReceipt extends z.TypeOf<typeof GoogleIapReceipt> {}
