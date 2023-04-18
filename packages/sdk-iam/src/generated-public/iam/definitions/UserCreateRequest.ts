/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserCreateRequest = z.object({
  AuthType: z.string(),
  Country: z.string(),
  DisplayName: z.string(),
  LoginId: z.string(),
  Password: z.string(),
  PasswordMD5Sum: z.string().nullish()
})

export interface UserCreateRequest extends z.TypeOf<typeof UserCreateRequest> {}
