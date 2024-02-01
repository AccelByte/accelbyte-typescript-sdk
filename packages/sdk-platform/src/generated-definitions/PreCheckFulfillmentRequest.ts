/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PreCheckFulfillmentRequest = z.object({
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  quantity: z.number().int()
})

export interface PreCheckFulfillmentRequest extends z.TypeOf<typeof PreCheckFulfillmentRequest> {}
