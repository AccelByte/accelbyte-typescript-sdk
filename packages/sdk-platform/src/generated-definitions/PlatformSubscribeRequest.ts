/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformSubscribeRequest = z.object({
  grantDays: z.number().int(),
  itemId: z.string(),
  language: z.string().nullish(),
  reason: z.string().nullish(),
  region: z.string().nullish(),
  source: z.string().nullish()
})

export interface PlatformSubscribeRequest extends z.TypeOf<typeof PlatformSubscribeRequest> {}
