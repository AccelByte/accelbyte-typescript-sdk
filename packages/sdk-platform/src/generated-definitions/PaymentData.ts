/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentData = z.object({
  discountAmount: z.number().int().nullish(),
  discountCode: z.string().nullish(),
  subtotalPrice: z.number().int().nullish(),
  tax: z.number().int().nullish(),
  totalPrice: z.number().int().nullish()
})

export interface PaymentData extends z.TypeOf<typeof PaymentData> {}
