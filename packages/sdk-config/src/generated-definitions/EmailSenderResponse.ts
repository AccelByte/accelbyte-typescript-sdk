/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ApiKeyInfo } from './ApiKeyInfo.js'
import { EmailTemplatePair } from './EmailTemplatePair.js'

export const EmailSenderResponse = z.object({
  apiKey: z.string(),
  apiKeyInfo: ApiKeyInfo,
  emailTemplates: z.array(EmailTemplatePair).nullish(),
  fromAddress: z.string(),
  fromName: z.string(),
  isDomainAuthenticated: z.boolean(),
  namespace: z.string()
})

export interface EmailSenderResponse extends z.TypeOf<typeof EmailSenderResponse> {}
