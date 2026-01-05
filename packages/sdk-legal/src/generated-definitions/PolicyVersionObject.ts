/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PolicyVersionObject = z.object({
  createdAt: z.string().nullish(),
  description: z.string().nullish(),
  displayVersion: z.string(),
  id: z.string(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean(),
  publishedDate: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface PolicyVersionObject extends z.TypeOf<typeof PolicyVersionObject> {}
