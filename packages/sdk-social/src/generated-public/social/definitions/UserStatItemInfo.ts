/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserStatItemInfo = z.object({
  additionalData: z.record(z.any()).nullish(),
  createdAt: z.string(),
  namespace: z.string(),
  statCode: z.string(),
  statName: z.string(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  userId: z.string(),
  value: z.number()
})

export interface UserStatItemInfo extends z.TypeOf<typeof UserStatItemInfo> {}
