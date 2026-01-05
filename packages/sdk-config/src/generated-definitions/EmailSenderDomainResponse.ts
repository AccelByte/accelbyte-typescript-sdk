/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Dns } from './Dns.js'

export const EmailSenderDomainResponse = z.object({
  dns: Dns,
  domain: z.string(),
  fromAddress: z.string(),
  fromName: z.string(),
  isDomainAuthenticated: z.boolean(),
  namespace: z.string()
})

export interface EmailSenderDomainResponse extends z.TypeOf<typeof EmailSenderDomainResponse> {}
