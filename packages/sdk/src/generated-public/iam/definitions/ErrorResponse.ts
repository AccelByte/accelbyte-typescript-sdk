/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserBan } from './UserBan'

export const ErrorResponse = z.object({
  clientId: z.string().nullish(),
  default_factor: z.string().nullish(),
  email: z.string().nullish(),
  error: z.string(),
  error_description: z.string().nullish(),
  error_uri: z.string().nullish(),
  factors: z.array(z.string()).nullish(),
  linkingToken: z.string().nullish(),
  messageVariables: z.record(z.string()).nullish(),
  mfa_token: z.string().nullish(),
  platformId: z.string().nullish(),
  userBan: UserBan.nullish()
})

export interface ErrorResponse extends z.TypeOf<typeof ErrorResponse> {}
