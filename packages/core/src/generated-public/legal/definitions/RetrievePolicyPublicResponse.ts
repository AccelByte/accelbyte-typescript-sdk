/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionWithLocalizedVersionObject } from './PolicyVersionWithLocalizedVersionObject'

export const RetrievePolicyPublicResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  readableId: z.string().nullish(),
  basePolicyId: z.string(),
  policyName: z.string(),
  policyType: z.string(),
  namespace: z.string(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  baseUrls: z.array(z.string()).nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  policyVersions: z.array(PolicyVersionWithLocalizedVersionObject).nullish(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  isMandatory: z.boolean(),
  isDefaultOpted: z.boolean(),
  isDefaultSelection: z.boolean()
})

export type RetrievePolicyPublicResponse = z.TypeOf<typeof RetrievePolicyPublicResponse>
