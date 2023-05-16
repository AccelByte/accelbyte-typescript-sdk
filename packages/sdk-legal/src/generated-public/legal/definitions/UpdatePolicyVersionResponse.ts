/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyVersionResponse = z.object({
  basePolicyId: z.string().nullish(),
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  displayVersion: z.string().nullish(),
  id: z.string(),
  isCommitted: z.boolean().nullish(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface UpdatePolicyVersionResponse extends z.TypeOf<typeof UpdatePolicyVersionResponse> {}
