/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RequestMember } from './RequestMember'

export const CreatePartyRequest = z.object({
  attributes: z.record(z.any()),
  configurationName: z.string(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxPlayers: z.number().int(),
  members: z.array(RequestMember),
  minPlayers: z.number().int(),
  textChat: z.boolean(),
  type: z.string()
})

export interface CreatePartyRequest extends z.TypeOf<typeof CreatePartyRequest> {}
