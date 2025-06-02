/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentProviderConfigEdit = z.object({
  aggregate: z.enum(['ADYEN', 'CHECKOUT', 'NEONPAY', 'STRIPE', 'XSOLLA']).nullish(),
  namespace: z.string(),
  region: z.string(),
  sandboxTaxJarApiToken: z.string().nullish(),
  specials: z.array(z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'NEONPAY', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA'])).nullish(),
  taxJarApiToken: z.string().nullish(),
  taxJarEnabled: z.boolean().nullish(),
  useGlobalTaxJarApiToken: z.boolean().nullish()
})

export interface PaymentProviderConfigEdit extends z.TypeOf<typeof PaymentProviderConfigEdit> {}
