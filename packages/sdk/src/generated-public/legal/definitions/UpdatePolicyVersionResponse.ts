/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyVersionResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  displayVersion: z.string().nullish(),
  description: z.string().nullish(),
  status: z.string().nullish(),
  publishedDate: z.string().nullish(),
  isCommitted: z.boolean().nullish(),
  basePolicyId: z.string().nullish()
})

export type UpdatePolicyVersionResponse = z.TypeOf<typeof UpdatePolicyVersionResponse>
