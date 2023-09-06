/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo.js'
import { OrderSummary } from './OrderSummary.js'

export const FulfillmentScriptContext = z.object({
  item: ItemInfo,
  namespace: z.string(),
  order: OrderSummary.nullish(),
  source: z.enum([
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
})

export interface FulfillmentScriptContext extends z.TypeOf<typeof FulfillmentScriptContext> {}
