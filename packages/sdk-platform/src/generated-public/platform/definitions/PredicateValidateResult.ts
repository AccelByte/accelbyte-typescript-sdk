/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PredicateValidateResult = z.object({
  matched: z.array(z.string()).nullish(),
  predicateName: z.string().nullish(),
  unmatched: z.array(z.string()).nullish(),
  validated: z.boolean().nullish()
})

export interface PredicateValidateResult extends z.TypeOf<typeof PredicateValidateResult> {}
