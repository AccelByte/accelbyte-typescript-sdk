/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateItem = z.object({
  customAttributes: z.record(z.any()),
  inventoryId: z.string(),
  serverCustomAttributes: z.record(z.any()),
  slotId: z.string(),
  sourceItemId: z.string(),
  tags: z.array(z.string()),
  type: z.string()
})

export interface UpdateItem extends z.TypeOf<typeof UpdateItem> {}
