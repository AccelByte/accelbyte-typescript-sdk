/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const RetrievePoliciesFromBasePolicyResponse = z.object({
  activeVersion: z.string().nullish(),
  countries: z.array(z.string()).nullish(),
  countryCode: z.string(),
  countryGroupName: z.string().nullish(),
  countryType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isActive: z.array(z.string()).nullish(),
  lastPublished: z.string().nullish(),
  policyName: z.string(),
  policyVersions: z.array(PolicyVersionObject).nullish(),
  updatedAt: z.string().nullish()
})

export interface RetrievePoliciesFromBasePolicyResponse extends z.TypeOf<typeof RetrievePoliciesFromBasePolicyResponse> {}
