/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderDetails = z.object({
  displayName: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  price: z.string(),
  currencyCode: z.string(),
  currencySymbol: z.string(),
  sandbox: z.boolean(),
  region: z.string().nullish(),
  charging: z.boolean()
})

export type PaymentOrderDetails = z.TypeOf<typeof PaymentOrderDetails>
