/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateLocalizedPolicyVersionResponse = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  localeCode: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface CreateLocalizedPolicyVersionResponse extends z.TypeOf<typeof CreateLocalizedPolicyVersionResponse> {}
