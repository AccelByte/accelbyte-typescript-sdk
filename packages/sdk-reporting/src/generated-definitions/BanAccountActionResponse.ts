/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BanAccountActionResponse = z.object({
  comment: z.string().nullish(),
  duration: z.number().int(),
  reason: z.string(),
  skipNotif: z.boolean(),
  type: z.string()
})

export interface BanAccountActionResponse extends z.TypeOf<typeof BanAccountActionResponse> {}
