/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiscountCodeDeductionDetail } from './DiscountCodeDeductionDetail.js'

export const DeductionDetail = z.object({
  deductionType: z.enum(['DISCOUNT_CODE']).nullish(),
  discountCodeDeductionDetail: DiscountCodeDeductionDetail.nullish()
})

export interface DeductionDetail extends z.TypeOf<typeof DeductionDetail> {}
