/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AddBufferRequest = z.object({
  AllocCount: z.number().int(),
  DeploymentName: z.string(),
  JobCount: z.number().int(),
  JobPriority: z.number().int(),
  OverrideVersion: z.string(),
  Region: z.string()
})

export interface AddBufferRequest extends z.TypeOf<typeof AddBufferRequest> {}
