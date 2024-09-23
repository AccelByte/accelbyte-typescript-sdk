/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigInfo = z.object({
  createdAt: z.string(),
  isPublic: z.boolean(),
  key: z.string(),
  namespace: z.string(),
  updatedAt: z.string(),
  value: z.string()
})

export interface ConfigInfo extends z.TypeOf<typeof ConfigInfo> {}
