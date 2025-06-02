/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem.js'

export const CampaignIfc = z.object({
  id: z.string().nullish(),
  items: z.array(RedeemableItem).nullish(),
  name: z.string().nullish(),
  namespace: z.string().nullish()
})

export interface CampaignIfc extends z.TypeOf<typeof CampaignIfc> {}
