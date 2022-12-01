/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Config = z.object({
  data: z.record(z.any()),
  format: z.string(),
  name: z.string(),
  updatedAt: z.string(),
  version: z.number().int()
})

export type Config = z.TypeOf<typeof Config>
