/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateConfigurationV2Response = z.object({
  applyMask: z.boolean().nullish(),
  configId: z.string(),
  configName: z.string(),
  description: z.string().nullish(),
  source: z.string().nullish(),
  value: z.string()
})

export interface UpdateConfigurationV2Response extends z.TypeOf<typeof UpdateConfigurationV2Response> {}
