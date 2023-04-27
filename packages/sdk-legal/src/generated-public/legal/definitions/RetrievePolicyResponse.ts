/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyVersionObject } from './PolicyVersionObject.js'

export const RetrievePolicyResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  readableId: z.string().nullish(),
  policyName: z.string(),
  countryCode: z.string(),
  countryGroupCode: z.string().nullish(),
  shouldNotifyOnUpdate: z.boolean(),
  policyVersions: z.array(PolicyVersionObject).nullish(),
  description: z.string().nullish(),
  isMandatory: z.boolean(),
  isDefaultOpted: z.boolean(),
  isDefaultSelection: z.boolean()
})

export interface RetrievePolicyResponse extends z.TypeOf<typeof RetrievePolicyResponse> {}
