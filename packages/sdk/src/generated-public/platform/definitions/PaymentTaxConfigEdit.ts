/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentTaxConfigEdit = z.object({
  taxJarEnabled: z.boolean().nullish(),
  taxJarApiToken: z.string().nullish(),
  sandboxTaxJarApiToken: z.string().nullish(),
  taxJarProductCodesMapping: z.record(z.string()).nullish()
})

export interface PaymentTaxConfigEdit extends z.TypeOf<typeof PaymentTaxConfigEdit> {}
