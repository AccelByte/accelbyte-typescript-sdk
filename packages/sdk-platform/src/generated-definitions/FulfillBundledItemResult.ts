/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillBundledItemResult = z.object({
  error: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  quantity: z.number().int().nullish()
})

export interface FulfillBundledItemResult extends z.TypeOf<typeof FulfillBundledItemResult> {}
