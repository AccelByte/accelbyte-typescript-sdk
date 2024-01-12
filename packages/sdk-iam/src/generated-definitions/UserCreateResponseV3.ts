/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserCreateResponseV3 = z.object({
  authType: z.string(),
  country: z.string(),
  dateOfBirth: z.string(),
  displayName: z.string(),
  emailAddress: z.string(),
  namespace: z.string(),
  userId: z.string()
})

export interface UserCreateResponseV3 extends z.TypeOf<typeof UserCreateResponseV3> {}
