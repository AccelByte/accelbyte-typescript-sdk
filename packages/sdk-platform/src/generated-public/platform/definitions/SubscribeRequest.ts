/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscribeRequest = z.object({
  itemId: z.string(),
  currencyCode: z.string(),
  source: z.string().nullish(),
  region: z.string().nullish(),
  language: z.string().nullish(),
  returnUrl: z.string().nullish()
})

export interface SubscribeRequest extends z.TypeOf<typeof SubscribeRequest> {}
