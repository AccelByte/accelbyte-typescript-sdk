/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentCallbackConfigUpdate = z.object({
  privateKey: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  dryRun: z.boolean().nullish()
})

export type PaymentCallbackConfigUpdate = z.TypeOf<typeof PaymentCallbackConfigUpdate>
