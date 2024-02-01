/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserPresence } from './UserPresence.js'

export const GetUsersPresenceResponse = z.object({
  away: z.number().int(),
  busy: z.number().int(),
  data: z.array(UserPresence),
  invisible: z.number().int(),
  offline: z.number().int(),
  online: z.number().int()
})

export interface GetUsersPresenceResponse extends z.TypeOf<typeof GetUsersPresenceResponse> {}
