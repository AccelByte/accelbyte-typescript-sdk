/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FixedPeriodRotationConfig = z.object({
  backfillType: z.enum(['CUSTOM', 'NONE']).nullish(),
  duration: z.number().int().nullish(),
  itemCount: z.number().int().nullish(),
  rule: z.enum(['SEQUENCE']).nullish()
})

export interface FixedPeriodRotationConfig extends z.TypeOf<typeof FixedPeriodRotationConfig> {}
