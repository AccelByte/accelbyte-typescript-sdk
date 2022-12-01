/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyInfo = z.object({
  id: z.string(),
  namespace: z.string(),
  keyGroupId: z.string(),
  value: z.string(),
  status: z.enum(['ACTIVE', 'ACQUIRED']),
  keyFile: z.string(),
  acquireOrderNo: z.string().nullish(),
  acquireUserId: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type KeyInfo = z.TypeOf<typeof KeyInfo>
