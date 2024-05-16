/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CampaignIfc } from './CampaignIfc.js'
import { DiscountConfig } from './DiscountConfig.js'
import { RedeemableItem } from './RedeemableItem.js'

export const CodeInfo = z.object({
  acquireOrderNo: z.string().nullish(),
  acquireUserId: z.string().nullish(),
  batchNo: z.number().int(),
  campaign: CampaignIfc.nullish(),
  campaignId: z.string(),
  createdAt: z.string(),
  discountConfig: DiscountConfig.nullish(),
  id: z.string(),
  items: z.array(RedeemableItem).nullish(),
  maxRedeemCountPerCampaignPerUser: z.number().int(),
  maxRedeemCountPerCode: z.number().int(),
  maxRedeemCountPerCodePerUser: z.number().int(),
  namespace: z.string(),
  redeemEnd: z.string().nullish(),
  redeemStart: z.string().nullish(),
  redeemType: z.enum(['DISCOUNT', 'ITEM']),
  redeemedCount: z.number().int(),
  remainder: z.number().int(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  type: z.enum(['REDEMPTION']),
  updatedAt: z.string(),
  value: z.string()
})

export interface CodeInfo extends z.TypeOf<typeof CodeInfo> {}
