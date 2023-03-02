/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IapItemFlatEntry = z.object({
  platform: z.enum(['APPLE', 'GOOGLE', 'PLAYSTATION', 'STEAM', 'XBOX', 'STADIA', 'EPICGAMES', 'TWITCH']).nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  itemIdentity: z.string().nullish(),
  platformProductId: z.string().nullish()
})

export interface IapItemFlatEntry extends z.TypeOf<typeof IapItemFlatEntry> {}
