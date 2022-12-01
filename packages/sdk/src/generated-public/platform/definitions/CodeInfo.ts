/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RedeemableItem } from './RedeemableItem'

export const CodeInfo = z.object({
  id: z.string(),
  type: z.enum(['REDEMPTION']),
  namespace: z.string(),
  campaignId: z.string(),
  value: z.string(),
  maxRedeemCountPerCode: z.number().int(),
  maxRedeemCountPerCodePerUser: z.number().int(),
  maxRedeemCountPerCampaignPerUser: z.number().int(),
  remainder: z.number().int(),
  redeemedCount: z.number().int(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  redeemStart: z.string().nullish(),
  redeemEnd: z.string().nullish(),
  redeemType: z.enum(['ITEM']),
  items: z.array(RedeemableItem).nullish(),
  batchNo: z.number().int(),
  acquireOrderNo: z.string().nullish(),
  acquireUserId: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type CodeInfo = z.TypeOf<typeof CodeInfo>
