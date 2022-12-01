/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdyenConfig } from './AdyenConfig'
import { AliPayConfig } from './AliPayConfig'
import { CheckoutConfig } from './CheckoutConfig'
import { PayPalConfig } from './PayPalConfig'
import { StripeConfig } from './StripeConfig'
import { WxPayConfigInfo } from './WxPayConfigInfo'
import { XsollaConfig } from './XsollaConfig'
import { XsollaPaywallConfig } from './XsollaPaywallConfig'

export const PaymentMerchantConfigInfo = z.object({
  id: z.string(),
  aliPayConfig: AliPayConfig.nullish(),
  aliPaySandboxConfig: AliPayConfig.nullish(),
  wxPayConfig: WxPayConfigInfo.nullish(),
  xsollaConfig: XsollaConfig.nullish(),
  xsollaPaywallConfig: XsollaPaywallConfig.nullish(),
  adyenConfig: AdyenConfig.nullish(),
  adyenSandboxConfig: AdyenConfig.nullish(),
  payPalConfig: PayPalConfig.nullish(),
  payPalSandboxConfig: PayPalConfig.nullish(),
  stripeConfig: StripeConfig.nullish(),
  stripeSandboxConfig: StripeConfig.nullish(),
  checkoutConfig: CheckoutConfig.nullish(),
  checkoutSandboxConfig: CheckoutConfig.nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type PaymentMerchantConfigInfo = z.TypeOf<typeof PaymentMerchantConfigInfo>
