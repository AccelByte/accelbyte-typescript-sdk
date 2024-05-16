/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PolicyObject } from './PolicyObject.js'

export const RetrieveBasePolicyResponse = z.object({
  affectedClientIds: z.array(z.string()).nullish(),
  basePolicyName: z.string(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isHidden: z.boolean().nullish(),
  namespace: z.string(),
  policies: z.array(PolicyObject).nullish(),
  policyTypeId: z.string().nullish(),
  policyTypeName: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string().nullish()
})

export interface RetrieveBasePolicyResponse extends z.TypeOf<typeof RetrieveBasePolicyResponse> {}
