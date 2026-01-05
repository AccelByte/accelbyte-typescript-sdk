/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SimpleLocalizedPolicyVersionObject = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  isDefaultSelection: z.boolean(),
  localeCode: z.string(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface SimpleLocalizedPolicyVersionObject extends z.TypeOf<typeof SimpleLocalizedPolicyVersionObject> {}
