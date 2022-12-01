/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateLocalizedPolicyVersionResponse = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  localeCode: z.string().nullish(),
  description: z.string().nullish()
})

export type CreateLocalizedPolicyVersionResponse = z.TypeOf<typeof CreateLocalizedPolicyVersionResponse>
