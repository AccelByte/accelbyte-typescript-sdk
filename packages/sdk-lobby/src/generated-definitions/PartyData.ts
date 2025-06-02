/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PartyData = z.object({
  custom_attribute: z.record(z.any()),
  invitees: z.array(z.string()),
  leader: z.string(),
  members: z.array(z.string()),
  namespace: z.string(),
  partyId: z.string(),
  updatedAt: z.number().int()
})

export interface PartyData extends z.TypeOf<typeof PartyData> {}
