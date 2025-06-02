/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SimpleLocalizedPolicyVersionObject } from './SimpleLocalizedPolicyVersionObject.js'

export const SimplePolicyVersionWithLocalizedVersionObject = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  id: z.string(),
  localizedPolicyVersions: z.array(SimpleLocalizedPolicyVersionObject).nullish(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface SimplePolicyVersionWithLocalizedVersionObject extends z.TypeOf<typeof SimplePolicyVersionWithLocalizedVersionObject> {}
