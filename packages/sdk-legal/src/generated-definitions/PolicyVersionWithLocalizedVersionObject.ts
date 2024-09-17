/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { LocalizedPolicyVersionObject } from './LocalizedPolicyVersionObject.js'

export const PolicyVersionWithLocalizedVersionObject = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  displayVersion: z.string(),
  description: z.string().nullish(),
  status: z.string().nullish(),
  publishedDate: z.string().nullish(),
  localizedPolicyVersions: z.array(LocalizedPolicyVersionObject).nullish(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean()
})

export interface PolicyVersionWithLocalizedVersionObject extends z.TypeOf<typeof PolicyVersionWithLocalizedVersionObject> {}
