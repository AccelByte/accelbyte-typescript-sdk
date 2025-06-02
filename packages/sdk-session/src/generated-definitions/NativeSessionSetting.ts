/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeSessionSetting = z.object({
  PSNDisableSystemUIMenu: z
    .array(z.enum(['KICK', 'PROMOTE_TO_LEADER', 'UPDATE_INVITABLE_USER_TYPE', 'UPDATE_JOINABLE_USER_TYPE']))
    .nullish(),
  PSNServiceLabel: z.number().int(),
  PSNSupportedPlatforms: z.array(z.string()).nullish(),
  SessionTitle: z.string(),
  ShouldSync: z.boolean().nullish(),
  XboxAllowCrossPlatform: z.boolean(),
  XboxSandboxID: z.string(),
  XboxServiceConfigID: z.string(),
  XboxSessionTemplateName: z.string(),
  XboxTitleID: z.string(),
  localizedSessionName: z.record(z.any()).nullish()
})

export interface NativeSessionSetting extends z.TypeOf<typeof NativeSessionSetting> {}
