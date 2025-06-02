/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionWithLocalizedVersionObject } from './PolicyVersionWithLocalizedVersionObject.js'

export const RetrievePolicyPublicResponse = z.object({
  basePolicyId: z.string(),
  baseUrls: z.array(z.string()).nullish(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultOpted: z.boolean(),
  isDefaultSelection: z.boolean(),
  isMandatory: z.boolean(),
  namespace: z.string(),
  policyName: z.string(),
  policyType: z.string(),
  policyVersions: z.array(PolicyVersionWithLocalizedVersionObject).nullish(),
  readableId: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string().nullish()
})

export interface RetrievePolicyPublicResponse extends z.TypeOf<typeof RetrievePolicyPublicResponse> {}
