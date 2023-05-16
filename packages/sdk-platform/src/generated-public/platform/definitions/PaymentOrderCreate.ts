/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaymentOrderCreate = z.object({
  currencyCode: z.string().nullish(),
  currencyNamespace: z.string().nullish(),
  customParameters: z.record(z.any()).nullish(),
  description: z.string(),
  extOrderNo: z.string(),
  extUserId: z.string().nullish(),
  itemType: z
    .enum(['APP', 'BUNDLE', 'CODE', 'COINS', 'EXTENSION', 'INGAMEITEM', 'LOOTBOX', 'MEDIA', 'OPTIONBOX', 'SEASON', 'SUBSCRIPTION'])
    .nullish(),
  language: z.string().nullish(),
  metadata: z.record(z.string()).nullish(),
  notifyUrl: z.string().nullish(),
  omitNotification: z.boolean().nullish(),
  platform: z.string().nullish(),
  price: z.number().int(),
  recurringPaymentOrderNo: z.string().nullish(),
  region: z.string().nullish(),
  returnUrl: z.string().nullish(),
  sandbox: z.boolean().nullish(),
  sku: z.string().nullish(),
  subscriptionId: z.string().nullish(),
  title: z.string()
})

export interface PaymentOrderCreate extends z.TypeOf<typeof PaymentOrderCreate> {}
