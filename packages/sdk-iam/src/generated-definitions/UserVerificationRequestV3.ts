/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserVerificationRequestV3 = z.object({
  code: z.string(),
  contactType: z.string(),
  languageTag: z.string().nullish(),
  validateOnly: z.boolean().nullish()
})

export interface UserVerificationRequestV3 extends z.TypeOf<typeof UserVerificationRequestV3> {}
