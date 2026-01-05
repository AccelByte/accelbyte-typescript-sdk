/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientPayload = z.object({
  ClientId: z.string().nullish(),
  Namespace: z.string().nullish(),
  RedirectUri: z.string().nullish()
})

export interface ClientPayload extends z.TypeOf<typeof ClientPayload> {}
