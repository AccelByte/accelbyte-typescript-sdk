/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderSummary } from './OrderSummary.js'

export const FulfillmentRequest = z.object({
  duration: z.number().int().nullish(),
  endDate: z.string().nullish(),
  entitlementCollectionId: z.string().nullish(),
  entitlementOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  language: z.string().nullish(),
  metadata: z.record(z.any()).nullish(),
  order: OrderSummary.nullish(),
  orderNo: z.string().nullish(),
  origin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  overrideBundleItemQty: z.record(z.number().int()).nullish(),
  quantity: z.number().int(),
  region: z.string().nullish(),
  source: z
    .enum([
      'ACHIEVEMENT',
      'CONSUME_ENTITLEMENT',
      'DLC',
      'EXPIRATION',
      'GIFT',
      'IAP',
      'IAP_CHARGEBACK_REVERSED',
      'ORDER_REVOCATION',
      'OTHER',
      'PAYMENT',
      'PROMOTION',
      'PURCHASE',
      'REDEEM_CODE',
      'REFERRAL_BONUS',
      'REWARD',
      'SELL_BACK'
    ])
    .nullish(),
  startDate: z.string().nullish(),
  storeId: z.string().nullish()
})

export interface FulfillmentRequest extends z.TypeOf<typeof FulfillmentRequest> {}
