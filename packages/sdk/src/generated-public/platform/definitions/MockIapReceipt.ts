/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MockIapReceipt = z.object({
  type: z.enum(['APPLE', 'GOOGLE', 'PLAYSTATION', 'STEAM', 'XBOX', 'STADIA', 'EPICGAMES', 'TWITCH']),
  productId: z.string(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  region: z.string().nullish(),
  language: z.string().nullish()
})

export type MockIapReceipt = z.TypeOf<typeof MockIapReceipt>
