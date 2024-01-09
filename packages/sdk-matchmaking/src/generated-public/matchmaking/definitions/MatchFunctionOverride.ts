/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchFunctionOverride = z.object({
  backfill_matches: z.string().nullish(),
  enrichment: z.array(z.string()).nullish(),
  make_matches: z.string().nullish(),
  stat_codes: z.array(z.string()).nullish(),
  validation: z.array(z.string()).nullish()
})

export interface MatchFunctionOverride extends z.TypeOf<typeof MatchFunctionOverride> {}
