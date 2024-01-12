/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateBasePolicyResponse = z.object({
  affectedClientIds: z.array(z.string()).nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  globalPolicyName: z.string().nullish(),
  id: z.string(),
  namespace: z.string().nullish(),
  policyId: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  typeId: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface UpdateBasePolicyResponse extends z.TypeOf<typeof UpdateBasePolicyResponse> {}
