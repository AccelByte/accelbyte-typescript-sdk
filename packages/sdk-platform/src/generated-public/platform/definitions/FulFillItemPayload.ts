/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulFillItemPayload = z.object({
  count: z.number().int(),
  itemIdentity: z.string(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU'])
})

export interface FulFillItemPayload extends z.TypeOf<typeof FulFillItemPayload> {}
