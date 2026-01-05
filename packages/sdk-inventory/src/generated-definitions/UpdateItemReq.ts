/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateItemReq = z.object({
  customAttributes: z.record(z.any()),
  slotId: z.string(),
  sourceItemId: z.string(),
  tags: z.array(z.string())
})

export interface UpdateItemReq extends z.TypeOf<typeof UpdateItemReq> {}
