/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest'

export const UserCreateFromInvitationRequestV3 = z.object({
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  authType: z.string(),
  country: z.string(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string(),
  password: z.string(),
  reachMinimumAge: z.boolean()
})

export type UserCreateFromInvitationRequestV3 = z.TypeOf<typeof UserCreateFromInvitationRequestV3>
