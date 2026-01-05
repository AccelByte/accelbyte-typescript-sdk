/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const RetrievePolicyResponse = z.object({
  countries: z.array(z.string()).nullish(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  countryGroupName: z.string().nullish(),
  countryType: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultOpted: z.boolean(),
  isDefaultSelection: z.boolean(),
  isMandatory: z.boolean(),
  policyName: z.string(),
  policyVersions: z.array(PolicyVersionObject).nullish(),
  readableId: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  updatedAt: z.string().nullish()
})

export interface RetrievePolicyResponse extends z.TypeOf<typeof RetrievePolicyResponse> {}
