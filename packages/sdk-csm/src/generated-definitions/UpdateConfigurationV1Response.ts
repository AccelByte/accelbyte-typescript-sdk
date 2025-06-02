/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateConfigurationV1Response = z.object({
  applyMask: z.boolean().nullish(),
  configId: z.string().nullish(),
  configName: z.string().nullish(),
  description: z.string().nullish(),
  source: z.string().nullish(),
  value: z.string().nullish()
})

export interface UpdateConfigurationV1Response extends z.TypeOf<typeof UpdateConfigurationV1Response> {}
