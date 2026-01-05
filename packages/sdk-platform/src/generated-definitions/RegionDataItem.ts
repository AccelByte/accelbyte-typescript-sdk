/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegionDataItem = z.object({
  currencyCode: z.string(),
  currencyNamespace: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  discountAmount: z.number().int().nullish(),
  discountExpireAt: z.string().nullish(),
  discountPercentage: z.number().int().nullish(),
  discountPurchaseAt: z.string().nullish(),
  discountedPrice: z.number().int().nullish(),
  expireAt: z.string().nullish(),
  price: z.number().int().nullish(),
  purchaseAt: z.string().nullish(),
  trialPrice: z.number().int().nullish()
})

export interface RegionDataItem extends z.TypeOf<typeof RegionDataItem> {}
