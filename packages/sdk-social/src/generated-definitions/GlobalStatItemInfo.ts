/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GlobalStatItemInfo = z.object({
  createdAt: z.string(),
  namespace: z.string(),
  statCode: z.string(),
  statName: z.string(),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string(),
  value: z.number()
})

export interface GlobalStatItemInfo extends z.TypeOf<typeof GlobalStatItemInfo> {}
