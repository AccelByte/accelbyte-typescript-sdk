/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderSummary } from './OrderSummary'

export const FulfillmentRequest = z.object({
  storeId: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  quantity: z.number().int(),
  orderNo: z.string().nullish(),
  order: OrderSummary.nullish(),
  source: z
    .enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'DLC', 'OTHER'])
    .nullish(),
  startDate: z.string().nullish(),
  endDate: z.string().nullish(),
  duration: z.number().int().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  origin: z.enum(['Playstation', 'Xbox', 'Steam', 'Epic', 'Stadia', 'IOS', 'GooglePlay', 'Twitch', 'Nintendo', 'System', 'Other']).nullish()
})

export type FulfillmentRequest = z.TypeOf<typeof FulfillmentRequest>
