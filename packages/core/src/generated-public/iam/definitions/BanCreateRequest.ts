/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BanCreateRequest = z.object({
  ban: z.string(),
  comment: z.string(),
  endDate: z.string(),
  reason: z.string(),
  skipNotif: z.boolean()
})

export type BanCreateRequest = z.TypeOf<typeof BanCreateRequest>
