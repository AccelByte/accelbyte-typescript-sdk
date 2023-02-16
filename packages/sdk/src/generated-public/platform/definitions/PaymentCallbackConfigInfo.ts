/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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

export interface PaymentCallbackConfigInfo extends z.TypeOf<typeof PaymentCallbackConfigInfo> {}
