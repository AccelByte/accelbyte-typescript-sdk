/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DiscountCodeInfo } from './DiscountCodeInfo.js'

export const DiscountCodeDeductionDetail = z.object({
  discountAmountCodes: z.array(DiscountCodeInfo).nullish(),
  discountPercentageCodes: z.array(DiscountCodeInfo).nullish(),
  totalAmountDeduction: z.number().int().nullish(),
  totalDeduction: z.number().int().nullish(),
  totalPercentageDeduction: z.number().int().nullish()
})

export interface DiscountCodeDeductionDetail extends z.TypeOf<typeof DiscountCodeDeductionDetail> {}
