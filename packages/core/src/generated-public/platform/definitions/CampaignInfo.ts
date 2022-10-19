/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem'

export const CampaignInfo = z.object({
  id: z.string(),
  type: z.enum(['REDEMPTION']),
  namespace: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  redeemStart: z.string().nullish(),
  redeemEnd: z.string().nullish(),
  maxRedeemCountPerCode: z.number().int(),
  maxRedeemCountPerCodePerUser: z.number().int(),
  maxRedeemCountPerCampaignPerUser: z.number().int(),
  maxSaleCount: z.number().int(),
  redeemType: z.enum(['ITEM']),
  items: z.array(RedeemableItem).nullish(),
  boothName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type CampaignInfo = z.TypeOf<typeof CampaignInfo>
