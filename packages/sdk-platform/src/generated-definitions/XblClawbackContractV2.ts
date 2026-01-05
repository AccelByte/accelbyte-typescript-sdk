/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XblClawbackEventSubscriptionData } from './XblClawbackEventSubscriptionData.js'

export const XblClawbackContractV2 = z.object({
  eventDate: z.string().nullish(),
  eventState: z.string(),
  lineItemId: z.string(),
  orderId: z.string(),
  productId: z.string(),
  productType: z.string().nullish(),
  purchasedDate: z.string().nullish(),
  sandboxId: z.string().nullish(),
  skuId: z.string().nullish(),
  subscriptionData: XblClawbackEventSubscriptionData.nullish()
})

export interface XblClawbackContractV2 extends z.TypeOf<typeof XblClawbackContractV2> {}
