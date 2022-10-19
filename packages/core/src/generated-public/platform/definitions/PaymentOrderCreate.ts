/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderCreate = z.object({
  extOrderNo: z.string(),
  sku: z.string().nullish(),
  extUserId: z.string().nullish(),
  price: z.number().int(),
  title: z.string(),
  description: z.string(),
  itemType: z.enum(['APP', 'COINS', 'INGAMEITEM', 'BUNDLE', 'CODE', 'SUBSCRIPTION', 'SEASON', 'MEDIA', 'OPTIONBOX', 'EXTENSION']).nullish(),
  currencyCode: z.string().nullish(),
  currencyNamespace: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  sandbox: z.boolean().nullish(),
  returnUrl: z.string().nullish(),
  notifyUrl: z.string().nullish(),
  customParameters: z.record(z.any()).nullish(),
  subscriptionId: z.string().nullish(),
  recurringPaymentOrderNo: z.string().nullish(),
  omitNotification: z.boolean().nullish(),
  metadata: z.record(z.string()).nullish(),
  platform: z.string().nullish()
})

export type PaymentOrderCreate = z.TypeOf<typeof PaymentOrderCreate>
