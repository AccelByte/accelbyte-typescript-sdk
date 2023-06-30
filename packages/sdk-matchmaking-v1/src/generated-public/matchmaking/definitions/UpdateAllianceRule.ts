/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Combination } from './Combination.js'

export const UpdateAllianceRule = z.object({
  combination: Combination.nullish(),
  maxNumber: z.number().int().nullish(),
  minNumber: z.number().int().nullish(),
  playerMaxNumber: z.number().int().nullish(),
  playerMinNumber: z.number().int().nullish()
})

export interface UpdateAllianceRule extends z.TypeOf<typeof UpdateAllianceRule> {}
