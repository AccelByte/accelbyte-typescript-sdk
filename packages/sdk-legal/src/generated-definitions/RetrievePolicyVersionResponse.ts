/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const RetrievePolicyVersionResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  displayVersion: z.string(),
  policyId: z.string().nullish(),
  description: z.string().nullish(),
  status: z.string().nullish(),
  publishedDate: z.string().nullish(),
  localizedPolicyVersions: z.array(LocalizedPolicyVersionObject).nullish(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean(),
  basePolicyId: z.string().nullish()
})

export interface RetrievePolicyVersionResponse extends z.TypeOf<typeof RetrievePolicyVersionResponse> {}
