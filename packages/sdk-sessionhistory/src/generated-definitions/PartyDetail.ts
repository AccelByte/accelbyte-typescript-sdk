/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyHistory } from './PartyHistory.js'

export const PartyDetail = z.object({
  created_at: z.string(),
  histories: z.array(PartyHistory),
  namespace: z.string(),
  partySessionID: z.string(),
  session_template: z.string()
})

export interface PartyDetail extends z.TypeOf<typeof PartyDetail> {}
