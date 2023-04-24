/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsmConfigRecord = z.object({
  claim_timeout: z.number().int(),
  createdAt: z.string(),
  creation_timeout: z.number().int(),
  namespace: z.string(),
  updatedAt: z.string()
})

export interface DsmConfigRecord extends z.TypeOf<typeof DsmConfigRecord> {}
