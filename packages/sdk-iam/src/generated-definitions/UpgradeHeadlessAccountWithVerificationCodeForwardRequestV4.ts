/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AcceptedPoliciesRequest } from './AcceptedPoliciesRequest.js'

export const UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4 = z.object({
  acceptedPolicies: z.array(AcceptedPoliciesRequest).nullish(),
  code: z.string(),
  country: z.string().nullish(),
  dateOfBirth: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddress: z.string(),
  password: z.string(),
  reachMinimumAge: z.boolean().nullish(),
  uniqueDisplayName: z.string().nullish(),
  username: z.string(),
  validateOnly: z.boolean().nullish()
})

export interface UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4
  extends z.TypeOf<typeof UpgradeHeadlessAccountWithVerificationCodeForwardRequestV4> {}
