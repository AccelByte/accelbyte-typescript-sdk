/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderDetails = z.object({
  charging: z.boolean(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  description: z.string().nullish(),
  displayName: z.string().nullish(),
  price: z.string(),
  region: z.string().nullish(),
  sandbox: z.boolean(),
  title: z.string()
})

export interface PaymentOrderDetails extends z.TypeOf<typeof PaymentOrderDetails> {}
