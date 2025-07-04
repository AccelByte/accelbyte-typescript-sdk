/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateUserResponseV4 = z.object({
  authType: z.string(),
  country: z.string(),
  dateOfBirth: z.string(),
  displayName: z.string(),
  emailAddress: z.string(),
  namespace: z.string(),
  uniqueDisplayName: z.string().nullish(),
  userId: z.string(),
  username: z.string()
})

export interface CreateUserResponseV4 extends z.TypeOf<typeof CreateUserResponseV4> {}
