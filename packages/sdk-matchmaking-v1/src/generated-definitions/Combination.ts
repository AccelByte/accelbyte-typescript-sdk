/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Role } from './Role.js'

export const Combination = z.object({
  alliances: z.array(z.array(Role)).nullish(),
  has_combination: z.boolean(),
  role_flexing_enable: z.boolean(),
  role_flexing_player: z.number().int(),
  role_flexing_second: z.number().int()
})

export interface Combination extends z.TypeOf<typeof Combination> {}
