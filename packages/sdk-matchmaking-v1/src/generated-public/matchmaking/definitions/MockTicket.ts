/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyMember } from './PartyMember.js'
import { Region } from './Region.js'

export const MockTicket = z.object({
  additional_criteria: z.record(z.any()),
  channel: z.string(),
  created_at: z.number().int(),
  first_ticket_created_at: z.number().int(),
  is_mock: z.string(),
  is_sampled: z.boolean(),
  latency_map: z.record(z.number().int()),
  namespace: z.string(),
  party_attributes: z.record(z.any()),
  party_id: z.string(),
  party_leader_id: z.string(),
  party_members: z.array(PartyMember),
  priority: z.number().int(),
  sampling_properties: z.array(z.array(z.string())),
  sorted_latency: z.array(Region),
  status: z.string(),
  ticket_id: z.string(),
  ticket_ids: z.array(z.string())
})

export interface MockTicket extends z.TypeOf<typeof MockTicket> {}
