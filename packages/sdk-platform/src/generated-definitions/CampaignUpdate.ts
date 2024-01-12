/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem.js'

export const CampaignUpdate = z.object({
  description: z.string().nullish(),
  items: z.array(RedeemableItem).nullish(),
  maxRedeemCountPerCampaignPerUser: z.number().int().nullish(),
  maxRedeemCountPerCode: z.number().int().nullish(),
  maxRedeemCountPerCodePerUser: z.number().int().nullish(),
  maxSaleCount: z.number().int().nullish(),
  name: z.string(),
  redeemEnd: z.string().nullish(),
  redeemStart: z.string().nullish(),
  redeemType: z.enum(['ITEM']).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  tags: z.array(z.string()).nullish()
})

export interface CampaignUpdate extends z.TypeOf<typeof CampaignUpdate> {}
