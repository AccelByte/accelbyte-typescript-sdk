/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyGroupInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  tags: z.array(z.string()).nullish(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
  boothName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type KeyGroupInfo = z.TypeOf<typeof KeyGroupInfo>
