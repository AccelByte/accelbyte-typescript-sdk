/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BoxItem = z.object({
  count: z.number().int().nullish(),
  duration: z.number().int().nullish(),
  endDate: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z.string().nullish()
})

export interface BoxItem extends z.TypeOf<typeof BoxItem> {}
