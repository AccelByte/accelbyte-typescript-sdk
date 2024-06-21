/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPasswordUpdateV3Request = z.object({
  languageTag: z.string(),
  mfaToken: z.string().nullish(),
  newPassword: z.string(),
  oldPassword: z.string()
})

export interface UserPasswordUpdateV3Request extends z.TypeOf<typeof UserPasswordUpdateV3Request> {}
