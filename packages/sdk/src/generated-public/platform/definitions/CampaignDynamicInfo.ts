/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CampaignDynamicInfo = z.object({
  availableSaleCount: z.number().int(),
  quantity: z.number().int(),
  saleCount: z.number().int(),
  lastBatchNo: z.number().int(),
  remainder: z.number().int()
})

export type CampaignDynamicInfo = z.TypeOf<typeof CampaignDynamicInfo>
