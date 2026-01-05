/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StripeConfig = z.object({
  allowedPaymentMethodTypes: z.array(z.string()).nullish(),
  publishableKey: z.string().nullish(),
  secretKey: z.string().nullish(),
  webhookSecret: z.string().nullish()
})

export interface StripeConfig extends z.TypeOf<typeof StripeConfig> {}
