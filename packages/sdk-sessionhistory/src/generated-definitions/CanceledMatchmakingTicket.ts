/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CanceledMatchmakingTicket = z.object({
  createdAt: z.string().nullish(),
  matchPool: z.string().nullish(),
  namespace: z.string().nullish(),
  value: z.number().int().nullish()
})

export interface CanceledMatchmakingTicket extends z.TypeOf<typeof CanceledMatchmakingTicket> {}
