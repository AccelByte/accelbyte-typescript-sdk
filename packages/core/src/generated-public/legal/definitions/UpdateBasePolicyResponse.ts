/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateBasePolicyResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  namespace: z.string().nullish(),
  policyId: z.string().nullish(),
  typeId: z.string().nullish(),
  globalPolicyName: z.string().nullish(),
  description: z.string().nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  affectedClientIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish()
})

export type UpdateBasePolicyResponse = z.TypeOf<typeof UpdateBasePolicyResponse>
