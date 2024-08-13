/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AllianceRule = z.object({
  max_number: z.number().int(),
  min_number: z.number().int(),
  player_max_number: z.number().int(),
  player_min_number: z.number().int()
})

export interface AllianceRule extends z.TypeOf<typeof AllianceRule> {}
