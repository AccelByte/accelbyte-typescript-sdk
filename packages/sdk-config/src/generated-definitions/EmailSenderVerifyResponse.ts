/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EmailSenderVerifyResponse = z.object({
  domain: z.string(),
  fromAddress: z.string(),
  fromName: z.string(),
  isDomainAuthenticated: z.boolean(),
  namespace: z.string()
})

export interface EmailSenderVerifyResponse extends z.TypeOf<typeof EmailSenderVerifyResponse> {}
