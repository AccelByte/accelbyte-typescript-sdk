/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RetrievePolicyTypeResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  policyTypeName: z.string(),
  description: z.string().nullish(),
  isNeedDocument: z.boolean()
})

export type RetrievePolicyTypeResponse = z.TypeOf<typeof RetrievePolicyTypeResponse>
