/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResetConfig = z.object({
  resetDate: z.number().int().nullish(),
  resetDay: z.number().int().nullish(),
  resetTime: z.string().nullish()
})

export interface ResetConfig extends z.TypeOf<typeof ResetConfig> {}
