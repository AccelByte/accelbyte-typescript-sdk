/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentProcessResult = z.object({
  pending: z.boolean(),
  reason: z.string().nullish(),
  redirectUrl: z.string().nullish(),
  success: z.boolean()
})

export interface PaymentProcessResult extends z.TypeOf<typeof PaymentProcessResult> {}
