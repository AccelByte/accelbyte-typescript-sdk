/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegionDataItemDto = z.object({
  currencyCode: z.string(),
  currencyNamespace: z.string(),
  currencyType: z.enum(['REAL', 'VIRTUAL']),
  discountAmount: z.number().int().nullish(),
  discountExpireAt: z.string().nullish(),
  discountPercentage: z.number().int().nullish(),
  discountPurchaseAt: z.string().nullish(),
  expireAt: z.string().nullish(),
  price: z.number().int(),
  purchaseAt: z.string().nullish(),
  trialPrice: z.number().int().nullish()
})

export interface RegionDataItemDto extends z.TypeOf<typeof RegionDataItemDto> {}
