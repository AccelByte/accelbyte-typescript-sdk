/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest.js'

export const CreateUserRequestV4 = z.object({
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  authType: z.enum(['EMAILPASSWD']),
  code: z.string().nullish(),
  country: z.string(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddress: z.string(),
  password: z.string().nullish(),
  passwordMD5Sum: z.string().nullish(),
  reachMinimumAge: z.boolean().nullish(),
  uniqueDisplayName: z.string().nullish(),
  username: z.string()
})

export interface CreateUserRequestV4 extends z.TypeOf<typeof CreateUserRequestV4> {}
