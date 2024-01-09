/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentCallbackConfigUpdate = z.object({
  dryRun: z.boolean().nullish(),
  notifyUrl: z.string().nullish(),
  privateKey: z.string().nullish()
})

export interface PaymentCallbackConfigUpdate extends z.TypeOf<typeof PaymentCallbackConfigUpdate> {}
