/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchAddUserIntoSessionRequest = z.object({
  blocked_players: z.array(z.string()).nullish(),
  party_id: z.string().nullish(),
  user_id: z.string()
})

export interface MatchAddUserIntoSessionRequest extends z.TypeOf<typeof MatchAddUserIntoSessionRequest> {}
