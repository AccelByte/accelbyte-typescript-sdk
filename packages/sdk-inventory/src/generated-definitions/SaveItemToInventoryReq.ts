/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveItemToInventoryReq = z.object({
  customAttributes: z.record(z.any()),
  qty: z.number().int(),
  serverCustomAttributes: z.record(z.any()),
  slotId: z.string(),
  slotUsed: z.number().int(),
  source: z.enum(['ECOMMERCE', 'OTHER']),
  sourceItemId: z.string(),
  tags: z.array(z.string()),
  type: z.string()
})

export interface SaveItemToInventoryReq extends z.TypeOf<typeof SaveItemToInventoryReq> {}
