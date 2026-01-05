/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConsumeItem = z.object({
  extItemDefId: z.string().nullish(),
  extItemId: z.string().nullish(),
  itemIdentity: z.string().nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish()
})

export interface ConsumeItem extends z.TypeOf<typeof ConsumeItem> {}
