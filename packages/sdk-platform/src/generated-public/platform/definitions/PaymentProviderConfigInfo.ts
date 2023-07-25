/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentProviderConfigInfo = z.object({
  aggregate: z.enum(['ADYEN', 'CHECKOUT', 'STRIPE', 'XSOLLA']).nullish(),
  id: z.string(),
  namespace: z.string(),
  paymentMerchantConfigId: z.string().nullish(),
  region: z.string(),
  sandboxTaxJarApiToken: z.string().nullish(),
  specials: z.array(z.enum(['ADYEN', 'ALIPAY', 'CHECKOUT', 'PAYPAL', 'STRIPE', 'WALLET', 'WXPAY', 'XSOLLA'])).nullish(),
  taxJarApiToken: z.string().nullish(),
  taxJarEnabled: z.boolean().nullish(),
  useGlobalTaxJarApiToken: z.boolean().nullish()
})

export interface PaymentProviderConfigInfo extends z.TypeOf<typeof PaymentProviderConfigInfo> {}
