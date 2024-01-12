/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountActiveSessionResponse = z.object({
  custom_game: z.number().int(),
  matchmaking_game: z.number().int(),
  total: z.number().int()
})

export interface CountActiveSessionResponse extends z.TypeOf<typeof CountActiveSessionResponse> {}
