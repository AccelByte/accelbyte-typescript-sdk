/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyObject } from './PolicyObject'

export const RetrieveBasePolicyResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  namespace: z.string(),
  policies: z.array(PolicyObject).nullish(),
  basePolicyName: z.string(),
  description: z.string().nullish(),
  affectedClientIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish(),
  policyTypeName: z.string().nullish(),
  policyTypeId: z.string().nullish()
})

export type RetrieveBasePolicyResponse = z.TypeOf<typeof RetrieveBasePolicyResponse>
