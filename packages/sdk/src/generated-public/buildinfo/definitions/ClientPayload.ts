/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientPayload = z.object({
  Namespace: z.string().nullish(),
  ClientId: z.string().nullish(),
  RedirectUri: z.string().nullish()
})

export type ClientPayload = z.TypeOf<typeof ClientPayload>
