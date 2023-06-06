/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SeasonSummary: z.ZodType<SeasonSummary> = z.lazy(() =>
  z.object({
    end: z.string(),
    id: z.string(),
    name: z.string(),
    namespace: z.string(),
    passCodes: z.array(z.string()).nullish(),
    previous: SeasonSummary.nullish(),
    publishedAt: z.string().nullish(),
    start: z.string(),
    status: z.enum(['DRAFT', 'PUBLISHED', 'RETIRED'])
  })
)

export interface SeasonSummary {
  end: string
  id: string
  name: string
  namespace: string
  passCodes?: string[] | null | undefined
  previous?: SeasonSummary | null | undefined
  publishedAt?: string | null | undefined
  start: string
  status: 'DRAFT' | 'PUBLISHED' | 'RETIRED'
}
