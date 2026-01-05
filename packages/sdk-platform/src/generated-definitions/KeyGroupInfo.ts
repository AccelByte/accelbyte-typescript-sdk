/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyGroupInfo = z.object({
  boothName: z.string(),
  createdAt: z.string(),
  description: z.string().nullish(),
  id: z.string(),
  name: z.string(),
  namespace: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  tags: z.array(z.string()).nullish(),
  updatedAt: z.string()
})

export interface KeyGroupInfo extends z.TypeOf<typeof KeyGroupInfo> {}
