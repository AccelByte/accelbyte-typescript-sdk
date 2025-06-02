/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PatchNamespaceConfigRequest = z.object({
  crossPlatformNoCurrentPlatform: z.boolean().nullish(),
  extraPlatforms: z.array(z.string()).nullish(),
  matchAnyCommon: z.boolean().nullish(),
  platformGroup: z.record(z.array(z.string())).nullish()
})

export interface PatchNamespaceConfigRequest extends z.TypeOf<typeof PatchNamespaceConfigRequest> {}
