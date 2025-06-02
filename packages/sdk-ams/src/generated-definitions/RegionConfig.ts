/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RegionConfig = z.object({
  bufferSize: z.number().int(),
  dynamicBuffer: z.boolean(),
  maxServerCount: z.number().int(),
  minServerCount: z.number().int(),
  region: z.string()
})

export interface RegionConfig extends z.TypeOf<typeof RegionConfig> {}
