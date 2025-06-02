/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KeyGroupCreate = z.object({
  description: z.string().nullish(),
  name: z.string(),
  status: z.enum(['ACTIVE', 'INACTIVE']).nullish(),
  tags: z.array(z.string()).nullish()
})

export interface KeyGroupCreate extends z.TypeOf<typeof KeyGroupCreate> {}
