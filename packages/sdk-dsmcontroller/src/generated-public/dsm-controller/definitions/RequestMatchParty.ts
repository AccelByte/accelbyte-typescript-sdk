/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RequestMatchMember } from './RequestMatchMember'

export const RequestMatchParty = z.object({
  party_attributes: z.record(z.any()),
  party_id: z.string(),
  party_members: z.array(RequestMatchMember)
})

export interface RequestMatchParty extends z.TypeOf<typeof RequestMatchParty> {}
