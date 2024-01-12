/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryAgeRestriction = z.object({
  AgeRestriction: z.number().int(),
  CountryCode: z.string(),
  CountryName: z.string(),
  Enable: z.boolean()
})

export interface CountryAgeRestriction extends z.TypeOf<typeof CountryAgeRestriction> {}
