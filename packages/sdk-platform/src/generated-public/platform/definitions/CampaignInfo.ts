/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem.js'

export const CampaignInfo = z.object({
  boothName: z.string(),
  createdAt: z.string(),
  description: z.string().nullish(),
  id: z.string(),
  items: z.array(RedeemableItem).nullish(),
  maxRedeemCountPerCampaignPerUser: z.number().int(),
  maxRedeemCountPerCode: z.number().int(),
  maxRedeemCountPerCodePerUser: z.number().int(),
  maxSaleCount: z.number().int(),
  name: z.string(),
  namespace: z.string(),
  redeemEnd: z.string().nullish(),
  redeemStart: z.string().nullish(),
  redeemType: z.enum(['ITEM']),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  tags: z.array(z.string()).nullish(),
  type: z.enum(['REDEMPTION']),
  updatedAt: z.string()
})

export interface CampaignInfo extends z.TypeOf<typeof CampaignInfo> {}
