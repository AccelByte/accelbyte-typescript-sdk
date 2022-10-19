/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TokenIntrospectResponse = z.object({
  active: z.boolean(),
  aud: z.string().nullish(),
  client_id: z.string().nullish(),
  exp: z.number().int().nullish(),
  iat: z.number().int().nullish(),
  scope: z.string().nullish(),
  sub: z.string().nullish()
})

export type TokenIntrospectResponse = z.TypeOf<typeof TokenIntrospectResponse>
