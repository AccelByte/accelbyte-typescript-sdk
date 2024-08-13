/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateItem = z.object({
  customAttributes: z.record(z.any()),
  inventoryConfigurationCode: z.string().nullish(),
  inventoryId: z.string().nullish(),
  qty: z.number().int(),
  serverCustomAttributes: z.record(z.any()),
  slotId: z.string(),
  slotUsed: z.number().int(),
  source: z.enum(['ECOMMERCE', 'OTHER']).nullish(),
  sourceItemId: z.string(),
  tags: z.array(z.string()),
  toSpecificInventory: z.boolean(),
  type: z.string()
})

export interface CreateItem extends z.TypeOf<typeof CreateItem> {}
