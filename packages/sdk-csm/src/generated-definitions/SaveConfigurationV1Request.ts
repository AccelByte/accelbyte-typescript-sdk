/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveConfigurationV1Request = z.object({
  applyMask: z.boolean().nullish(),
  configName: z.string(),
  description: z.string().nullish(),
  source: z.string(),
  value: z.string()
})

export interface SaveConfigurationV1Request extends z.TypeOf<typeof SaveConfigurationV1Request> {}
