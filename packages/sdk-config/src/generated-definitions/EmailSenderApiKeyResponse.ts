/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EmailSenderApiKeyResponse = z.object({
  account: z.string(),
  apiKey: z.string().nullish(),
  namespace: z.string(),
  useCount: z.number().int()
})

export interface EmailSenderApiKeyResponse extends z.TypeOf<typeof EmailSenderApiKeyResponse> {}
