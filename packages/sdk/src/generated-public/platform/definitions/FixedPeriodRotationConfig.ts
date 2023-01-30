/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FixedPeriodRotationConfig = z.object({
  duration: z.number().int().nullish(),
  rule: z.enum(['SEQUENCE']).nullish(),
  backfillType: z.enum(['NONE', 'CUSTOM']).nullish(),
  itemCount: z.number().int().nullish()
})

export type FixedPeriodRotationConfig = z.TypeOf<typeof FixedPeriodRotationConfig>
