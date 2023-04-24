/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BoxItem = z.object({
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  itemType: z.string().nullish(),
  duration: z.number().int().nullish(),
  endDate: z.string().nullish(),
  count: z.number().int().nullish()
})

export interface BoxItem extends z.TypeOf<typeof BoxItem> {}
