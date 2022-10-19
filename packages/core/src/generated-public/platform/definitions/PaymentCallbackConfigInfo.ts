/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentCallbackConfigInfo = z.object({
  namespace: z.string(),
  privateKey: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  dryRun: z.boolean().nullish()
})

export type PaymentCallbackConfigInfo = z.TypeOf<typeof PaymentCallbackConfigInfo>
