/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyInfo = z.object({
  acquireOrderNo: z.string().nullish(),
  acquireUserId: z.string().nullish(),
  createdAt: z.string(),
  id: z.string(),
  keyFile: z.string(),
  keyGroupId: z.string(),
  namespace: z.string(),
  status: z.enum(['ACQUIRED', 'ACTIVE']),
  updatedAt: z.string(),
  value: z.string()
})

export interface KeyInfo extends z.TypeOf<typeof KeyInfo> {}
