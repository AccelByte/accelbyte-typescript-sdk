/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DsmConfigRecord = z.object({
  claim_timeout: z.number().int(),
  createdAt: z.string(),
  creation_timeout: z.number().int(),
  default_version: z.string(),
  modifiedBy: z.string(),
  namespace: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()).nullish(),
  protocol: z.string(),
  providers: z.array(z.string()),
  session_timeout: z.number().int(),
  unreachable_timeout: z.number().int(),
  updatedAt: z.string()
})

export interface DsmConfigRecord extends z.TypeOf<typeof DsmConfigRecord> {}
