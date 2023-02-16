/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentProviderConfigInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  region: z.string(),
  aggregate: z.enum(['XSOLLA', 'ADYEN']).nullish(),
  specials: z.array(z.enum(['WALLET', 'XSOLLA', 'ADYEN', 'STRIPE', 'CHECKOUT', 'ALIPAY', 'WXPAY', 'PAYPAL'])).nullish(),
  paymentMerchantConfigId: z.string(),
  taxJarEnabled: z.boolean().nullish(),
  taxJarApiToken: z.string().nullish(),
  sandboxTaxJarApiToken: z.string().nullish(),
  useGlobalTaxJarApiToken: z.boolean().nullish()
})

export interface PaymentProviderConfigInfo extends z.TypeOf<typeof PaymentProviderConfigInfo> {}
