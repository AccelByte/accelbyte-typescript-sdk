/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PolicyVersionObject = z.object({
  id: z.string(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  displayVersion: z.string(),
  description: z.string().nullish(),
  status: z.string().nullish(),
  publishedDate: z.string().nullish(),
  isCommitted: z.boolean(),
  isInEffect: z.boolean()
})

export type PolicyVersionObject = z.TypeOf<typeof PolicyVersionObject>
