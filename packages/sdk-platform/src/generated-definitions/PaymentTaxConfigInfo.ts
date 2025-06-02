/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentTaxConfigInfo = z.object({
  sandboxTaxJarApiToken: z.string().nullish(),
  taxJarApiToken: z.string().nullish(),
  taxJarEnabled: z.boolean().nullish(),
  taxJarProductCodesMapping: z.record(z.string()).nullish()
})

export interface PaymentTaxConfigInfo extends z.TypeOf<typeof PaymentTaxConfigInfo> {}
