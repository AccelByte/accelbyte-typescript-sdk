/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTestUserResponseV4 = z.object({
  authType: z.string(),
  country: z.string(),
  dateOfBirth: z.string(),
  displayName: z.string(),
  emailAddress: z.string(),
  namespace: z.string(),
  password: z.string(),
  userId: z.string(),
  username: z.string(),
  verified: z.boolean()
})

export type CreateTestUserResponseV4 = z.TypeOf<typeof CreateTestUserResponseV4>
