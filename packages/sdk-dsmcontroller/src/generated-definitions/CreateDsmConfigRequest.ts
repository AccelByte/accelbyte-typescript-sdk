/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateDsmConfigRequest = z.object({
  claim_timeout: z.number().int(),
  creation_timeout: z.number().int(),
  default_version: z.string(),
  port: z.number().int(),
  ports: z.record(z.number().int()),
  protocol: z.string(),
  providers: z.array(z.string()),
  session_timeout: z.number().int(),
  unreachable_timeout: z.number().int()
})

export interface CreateDsmConfigRequest extends z.TypeOf<typeof CreateDsmConfigRequest> {}
