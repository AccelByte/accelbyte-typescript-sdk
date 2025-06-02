/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const PolicyVersionWithLocalizedVersionObject = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  displayVersion: z.string(),
  id: z.string(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean(),
  localizedPolicyVersions: z.array(LocalizedPolicyVersionObject).nullish(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface PolicyVersionWithLocalizedVersionObject extends z.TypeOf<typeof PolicyVersionWithLocalizedVersionObject> {}
