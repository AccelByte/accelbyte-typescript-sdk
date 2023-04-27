/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchAttributes } from './MatchAttributes.js'
import { PartyMember } from './PartyMember.js'

export const MatchingParty = z.object({
  match_attributes: MatchAttributes,
  party_attributes: z.record(z.any()),
  party_id: z.string(),
  party_members: z.array(PartyMember)
})

export interface MatchingParty extends z.TypeOf<typeof MatchingParty> {}
