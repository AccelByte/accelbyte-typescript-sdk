/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IapItemEntry = z.object({
  itemIdentity: z.string().nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  platformProductIdMap: z.record(z.string()).nullish()
})

export interface IapItemEntry extends z.TypeOf<typeof IapItemEntry> {}
