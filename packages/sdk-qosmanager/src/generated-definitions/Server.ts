/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Server = z.object({
  alias: z.string(),
  ip: z.string(),
  last_update: z.string(),
  port: z.number().int(),
  region: z.string(),
  status: z.string()
})

export interface Server extends z.TypeOf<typeof Server> {}
