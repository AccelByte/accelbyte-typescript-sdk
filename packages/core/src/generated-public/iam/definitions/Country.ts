/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Country = z.object({
  AgeRestriction: z.number().int(),
  CountryCode: z.string(),
  CountryName: z.string(),
  Enable: z.boolean(),
  Namespace: z.string()
})

export type Country = z.TypeOf<typeof Country>
