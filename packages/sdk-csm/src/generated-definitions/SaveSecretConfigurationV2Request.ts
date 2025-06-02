/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SaveSecretConfigurationV2Request = z.object({
  configName: z.string(),
  description: z.string().nullish(),
  source: z.string(),
  value: z.string()
})

export interface SaveSecretConfigurationV2Request extends z.TypeOf<typeof SaveSecretConfigurationV2Request> {}
