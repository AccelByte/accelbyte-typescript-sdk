/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PredicateValidateResult = z.object({
  predicateName: z.string().nullish(),
  validated: z.boolean().nullish(),
  matched: z.array(z.string()).nullish(),
  unmatched: z.array(z.string()).nullish()
})

export type PredicateValidateResult = z.TypeOf<typeof PredicateValidateResult>
