/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest'

export const UserCreateRequestV3 = z.object({
  PasswordMD5Sum: z.string().nullish(),
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  authType: z.string(),
  code: z.string(),
  country: z.string(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string(),
  emailAddress: z.string(),
  password: z.string(),
  reachMinimumAge: z.boolean()
})

export type UserCreateRequestV3 = z.TypeOf<typeof UserCreateRequestV3>
