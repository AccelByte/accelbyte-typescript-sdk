/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Party } from './Party.js'

export const PartyHistory = z.object({
  eventName: z.string(),
  payload: Party,
  requesterClientID: z.string().nullish(),
  requesterUserID: z.string().nullish(),
  timestamp: z.string()
})

export interface PartyHistory extends z.TypeOf<typeof PartyHistory> {}
