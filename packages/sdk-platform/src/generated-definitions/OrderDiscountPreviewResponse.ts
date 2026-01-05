/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeductionDetail } from './DeductionDetail.js'

export const OrderDiscountPreviewResponse = z.object({
  deduction: z.number().int(),
  deductionDetails: z.array(DeductionDetail).nullish(),
  discountedPrice: z.number().int(),
  finalPrice: z.number().int().nullish(),
  itemId: z.string(),
  price: z.number().int().nullish(),
  quantity: z.number().int()
})

export interface OrderDiscountPreviewResponse extends z.TypeOf<typeof OrderDiscountPreviewResponse> {}
