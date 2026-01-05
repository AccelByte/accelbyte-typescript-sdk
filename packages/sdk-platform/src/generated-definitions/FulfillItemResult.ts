/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillBundledItemResult } from './FulfillBundledItemResult.js'

export const FulfillItemResult = z.object({
  error: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  items: z.array(FulfillBundledItemResult).nullish()
})

export interface FulfillItemResult extends z.TypeOf<typeof FulfillItemResult> {}
