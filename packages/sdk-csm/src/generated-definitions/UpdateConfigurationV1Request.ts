/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateConfigurationV1Request = z.object({
  applyMask: z.boolean().nullish(),
  description: z.string().nullish(),
  value: z.string().nullish()
})

export interface UpdateConfigurationV1Request extends z.TypeOf<typeof UpdateConfigurationV1Request> {}
