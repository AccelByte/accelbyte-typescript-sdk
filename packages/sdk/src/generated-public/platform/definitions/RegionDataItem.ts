/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegionDataItem = z.object({
  price: z.number().int(),
  discountPercentage: z.number().int().nullish(),
  discountAmount: z.number().int().nullish(),
  discountedPrice: z.number().int().nullish(),
  currencyCode: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  currencyNamespace: z.string(),
  trialPrice: z.number().int().nullish(),
  purchaseAt: z.string().nullish(),
  expireAt: z.string().nullish(),
  discountPurchaseAt: z.string().nullish(),
  discountExpireAt: z.string().nullish()
})

export type RegionDataItem = z.TypeOf<typeof RegionDataItem>
