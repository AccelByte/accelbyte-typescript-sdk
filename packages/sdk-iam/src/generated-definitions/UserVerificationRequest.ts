/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserVerificationRequest = z.object({
  Code: z.string(),
  ContactType: z.string(),
  LanguageTag: z.string(),
  validateOnly: z.boolean()
})

export interface UserVerificationRequest extends z.TypeOf<typeof UserVerificationRequest> {}
