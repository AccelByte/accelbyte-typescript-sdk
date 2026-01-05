/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsmConfigRecord = z.object({
  claim_timeout: z.number().int(),
  createdAt: z.string().nullish(),
  creation_timeout: z.number().int(),
  namespace: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface DsmConfigRecord extends z.TypeOf<typeof DsmConfigRecord> {}
