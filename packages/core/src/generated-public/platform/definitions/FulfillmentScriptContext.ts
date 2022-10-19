/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo'
import { OrderSummary } from './OrderSummary'

export const FulfillmentScriptContext = z.object({
  namespace: z.string(),
  source: z.enum(['PURCHASE', 'IAP', 'PROMOTION', 'ACHIEVEMENT', 'REFERRAL_BONUS', 'REDEEM_CODE', 'REWARD', 'GIFT', 'DLC', 'OTHER']),
  order: OrderSummary.nullish(),
  item: ItemInfo
})

export type FulfillmentScriptContext = z.TypeOf<typeof FulfillmentScriptContext>
