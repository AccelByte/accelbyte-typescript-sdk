/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryV3Response = z.object({
  ageRestriction: z.number().int(),
  countryCode: z.string(),
  countryName: z.string(),
  enable: z.boolean()
})

export interface CountryV3Response extends z.TypeOf<typeof CountryV3Response> {}
