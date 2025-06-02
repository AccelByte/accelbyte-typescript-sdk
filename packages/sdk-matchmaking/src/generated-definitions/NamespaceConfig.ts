/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespaceConfig = z.object({
  crossPlatformNoCurrentPlatform: z.boolean().nullish(),
  extraPlatforms: z.array(z.string()).nullish(),
  matchAnyCommon: z.boolean().nullish(),
  namespace: z.string(),
  platformGroup: z.record(z.array(z.string())).nullish()
})

export interface NamespaceConfig extends z.TypeOf<typeof NamespaceConfig> {}
