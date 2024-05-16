/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderDiscountPreviewRequest = z.object({
  currencyCode: z.string(),
  discountCodes: z.array(z.string()).nullish(),
  discountedPrice: z.number().int(),
  itemId: z.string(),
  price: z.number().int().nullish(),
  quantity: z.number().int()
})

export interface OrderDiscountPreviewRequest extends z.TypeOf<typeof OrderDiscountPreviewRequest> {}
