/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiscountConfig } from './DiscountConfig.js'

export const DiscountCodeInfo = z.object({
  campaignId: z.string().nullish(),
  campaignName: z.string().nullish(),
  code: z.string().nullish(),
  deduction: z.number().int().nullish(),
  discountConfig: DiscountConfig.nullish()
})

export interface DiscountCodeInfo extends z.TypeOf<typeof DiscountCodeInfo> {}
