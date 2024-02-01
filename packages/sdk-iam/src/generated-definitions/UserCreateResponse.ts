/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserCreateResponse = z.object({
  AuthType: z.string(),
  Country: z.string(),
  DateOfBirth: z.string(),
  DisplayName: z.string(),
  LoginId: z.string(),
  Namespace: z.string(),
  UserId: z.string()
})

export interface UserCreateResponse extends z.TypeOf<typeof UserCreateResponse> {}
