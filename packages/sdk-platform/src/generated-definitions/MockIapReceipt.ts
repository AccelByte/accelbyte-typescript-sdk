/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MockIapReceipt = z.object({
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  language: z.string().nullish(),
  productId: z.string(),
  region: z.string().nullish(),
  transactionId: z.string().nullish(),
  type: z.enum(['APPLE', 'EPICGAMES', 'GOOGLE', 'OCULUS', 'PLAYSTATION', 'STADIA', 'STEAM', 'TWITCH', 'XBOX'])
})

export interface MockIapReceipt extends z.TypeOf<typeof MockIapReceipt> {}
