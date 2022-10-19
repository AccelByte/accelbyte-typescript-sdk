/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest'

export const CreateUserRequestV4 = z.object({
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  authType: z.string(),
  code: z.string(),
  country: z.string(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string(),
  emailAddress: z.string(),
  password: z.string(),
  passwordMD5Sum: z.string().nullish(),
  reachMinimumAge: z.boolean(),
  username: z.string()
})

export type CreateUserRequestV4 = z.TypeOf<typeof CreateUserRequestV4>
