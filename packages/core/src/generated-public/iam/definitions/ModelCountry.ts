/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModelCountry = z.object({
  AgeRestriction: z.number().int(),
  CountryCode: z.string(),
  CountryName: z.string(),
  Enable: z.boolean()
})

export type ModelCountry = z.TypeOf<typeof ModelCountry>
