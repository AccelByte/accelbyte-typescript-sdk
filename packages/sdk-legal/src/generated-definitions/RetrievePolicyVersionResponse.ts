/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const RetrievePolicyVersionResponse = z.object({
  basePolicyId: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  displayVersion: z.string(),
  id: z.string(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean(),
  localizedPolicyVersions: z.array(LocalizedPolicyVersionObject).nullish(),
  policyId: z.string().nullish(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface RetrievePolicyVersionResponse extends z.TypeOf<typeof RetrievePolicyVersionResponse> {}
