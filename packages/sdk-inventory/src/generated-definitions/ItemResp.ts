/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ItemResp = z.object({
  createdAt: z.string(),
  customAttributes: z.record(z.any()),
  id: z.string(),
  inventoryId: z.string(),
  itemInfo: z.record(z.any()),
  namespace: z.string(),
  platformAvailable: z.boolean().nullish(),
  qty: z.number().int(),
  serverCustomAttributes: z.record(z.any()),
  slotId: z.string(),
  slotUsed: z.number().int(),
  source: z.string(),
  sourceItemId: z.string(),
  tags: z.array(z.string()),
  type: z.string(),
  updatedAt: z.string(),
  userId: z.string()
})

export interface ItemResp extends z.TypeOf<typeof ItemResp> {}
