/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExcessStrategy = z.object({
  currency: z.string().nullish(),
  method: z.enum(['CURRENCY', 'NONE']),
  percentPerExp: z.number().int().nullish()
})

export interface ExcessStrategy extends z.TypeOf<typeof ExcessStrategy> {}
