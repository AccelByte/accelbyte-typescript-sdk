/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const JwkKey = z.object({
  alg: z.string().nullish(),
  e: z.string().nullish(),
  kid: z.string().nullish(),
  kty: z.string(),
  n: z.string().nullish(),
  use: z.string().nullish()
})

export type JwkKey = z.TypeOf<typeof JwkKey>
