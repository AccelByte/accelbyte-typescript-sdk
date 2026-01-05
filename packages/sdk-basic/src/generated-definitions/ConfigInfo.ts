/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigInfo = z.object({
  createdAt: z.string().nullish(),
  key: z.string().nullish(),
  namespace: z.string().nullish(),
  updatedAt: z.string().nullish(),
  value: z.string().nullish()
})

export interface ConfigInfo extends z.TypeOf<typeof ConfigInfo> {}
