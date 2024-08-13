/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyMember } from './PartyMember.js'

export const MatchingParty = z.object({
  first_ticket_created_at: z.number().int(),
  party_attributes: z.record(z.any()).nullish(),
  party_id: z.string(),
  party_members: z.array(PartyMember),
  ticket_id: z.string()
})

export interface MatchingParty extends z.TypeOf<typeof MatchingParty> {}
