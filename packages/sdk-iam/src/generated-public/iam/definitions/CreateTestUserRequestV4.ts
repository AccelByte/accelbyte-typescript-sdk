/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest.js'

export const CreateTestUserRequestV4 = z.object({
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  authType: z.enum(['EMAILPASSWD']),
  country: z.string(),
  dateOfBirth: z.string(),
  displayName: z.string(),
  emailAddress: z.string(),
  password: z.string(),
  passwordMD5Sum: z.string(),
  username: z.string(),
  verified: z.boolean()
})

export interface CreateTestUserRequestV4 extends z.TypeOf<typeof CreateTestUserRequestV4> {}
