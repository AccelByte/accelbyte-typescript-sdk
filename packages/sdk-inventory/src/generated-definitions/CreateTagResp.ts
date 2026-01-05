/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTagResp = z.object({
  createdAt: z.string(),
  name: z.string(),
  namespace: z.string(),
  owner: z.enum(['CLIENT', 'SERVER'])
})

export interface CreateTagResp extends z.TypeOf<typeof CreateTagResp> {}
