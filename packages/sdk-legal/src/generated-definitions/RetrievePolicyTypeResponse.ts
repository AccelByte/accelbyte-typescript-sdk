/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RetrievePolicyTypeResponse = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isNeedDocument: z.boolean(),
  policyTypeName: z.string(),
  updatedAt: z.string().nullish()
})

export interface RetrievePolicyTypeResponse extends z.TypeOf<typeof RetrievePolicyTypeResponse> {}
