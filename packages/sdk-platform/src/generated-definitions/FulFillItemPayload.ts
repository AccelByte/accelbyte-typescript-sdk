/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulFillItemPayload = z.object({
  count: z.number().int(),
  entitlementCollectionId: z.string().nullish(),
  entitlementOrigin: z
    .enum(['Epic', 'GooglePlay', 'IOS', 'Nintendo', 'Oculus', 'Other', 'Playstation', 'Steam', 'System', 'Twitch', 'Xbox'])
    .nullish(),
  itemIdentity: z.string(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU'])
})

export interface FulFillItemPayload extends z.TypeOf<typeof FulFillItemPayload> {}
