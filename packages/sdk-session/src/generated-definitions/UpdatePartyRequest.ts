/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePartyRequest = z.object({
  attributes: z.record(z.any()),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  type: z.string(),
  version: z.number().int()
})

export interface UpdatePartyRequest extends z.TypeOf<typeof UpdatePartyRequest> {}
