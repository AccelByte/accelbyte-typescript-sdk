/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserStatItemInfo = z.object({
  statCode: z.string(),
  statName: z.string(),
  namespace: z.string(),
  value: z.number(),
  tags: z.array(z.string()).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  additionalData: z.record(z.any()).nullish(),
  userId: z.string()
})

export interface UserStatItemInfo extends z.TypeOf<typeof UserStatItemInfo> {}
