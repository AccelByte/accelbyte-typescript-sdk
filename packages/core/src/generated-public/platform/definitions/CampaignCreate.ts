/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem'

export const CampaignCreate = z.object({
  type: z.enum(['REDEMPTION']).nullish(),
  name: z.string(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  maxRedeemCountPerCode: z.number().int().nullish(),
  maxRedeemCountPerCodePerUser: z.number().int().nullish(),
  maxRedeemCountPerCampaignPerUser: z.number().int().nullish(),
  maxSaleCount: z.number().int().nullish(),
  redeemStart: z.string().nullish(),
  redeemEnd: z.string().nullish(),
  redeemType: z.enum(['ITEM']).nullish(),
  items: z.array(RedeemableItem).nullish()
})

export type CampaignCreate = z.TypeOf<typeof CampaignCreate>
