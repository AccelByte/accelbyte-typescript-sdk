/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentCallbackConfigInfo = z.object({
  dryRun: z.boolean().nullish(),
  namespace: z.string(),
  notifyUrl: z.string().nullish(),
  privateKey: z.string().nullish()
})

export interface PaymentCallbackConfigInfo extends z.TypeOf<typeof PaymentCallbackConfigInfo> {}
