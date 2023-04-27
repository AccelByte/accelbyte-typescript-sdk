/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayerData } from './PlayerData.js'

export const Ticket = z.object({
  createdAt: z.string().nullish(),
  latencies: z.record(z.number().int()).nullish(),
  matchPool: z.string().nullish(),
  namespace: z.string().nullish(),
  partySessionID: z.string().nullish(),
  players: z.array(PlayerData).nullish(),
  ticketAttributes: z.record(z.any()).nullish(),
  ticketID: z.string().nullish()
})

export interface Ticket extends z.TypeOf<typeof Ticket> {}
