/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentCallbackConfigUpdate = z.object({
  privateKey: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  dryRun: z.boolean().nullish()
})

export interface PaymentCallbackConfigUpdate extends z.TypeOf<typeof PaymentCallbackConfigUpdate> {}
