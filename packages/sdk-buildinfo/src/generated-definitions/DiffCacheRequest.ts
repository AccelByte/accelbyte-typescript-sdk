/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffCacheRequest = z.object({
  appId: z.string(),
  destinationVersion: z.string(),
  priority: z.boolean().nullish(),
  sourceVersion: z.string()
})

export interface DiffCacheRequest extends z.TypeOf<typeof DiffCacheRequest> {}
