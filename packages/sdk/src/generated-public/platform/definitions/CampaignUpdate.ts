/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem'

export const CampaignUpdate = z.object({
  name: z.string(),
  description: z.string().nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  tags: z.array(z.string()).nullish(),
  maxRedeemCountPerCode: z.number().int().nullish(),
  maxRedeemCountPerCodePerUser: z.number().int().nullish(),
  maxRedeemCountPerCampaignPerUser: z.number().int().nullish(),
  maxSaleCount: z.number().int().nullish(),
  redeemStart: z.string().nullish(),
  redeemEnd: z.string().nullish(),
  redeemType: z.enum(['ITEM']).nullish(),
  items: z.array(RedeemableItem).nullish()
})

export type CampaignUpdate = z.TypeOf<typeof CampaignUpdate>
