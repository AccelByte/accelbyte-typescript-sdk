/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreatedMatchmakingTicket = z.object({
  createdAt: z.string().nullish(),
  matchPool: z.string().nullish(),
  namespace: z.string().nullish(),
  value: z.number().int().nullish()
})

export interface CreatedMatchmakingTicket extends z.TypeOf<typeof CreatedMatchmakingTicket> {}