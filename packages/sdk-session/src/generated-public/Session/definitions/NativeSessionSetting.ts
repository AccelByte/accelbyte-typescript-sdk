/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeSessionSetting = z.object({
  PSNServiceLabel: z.number().int(),
  PSNSupportedPlatforms: z.array(z.string()).nullish(),
  SessionTitle: z.string(),
  ShouldSync: z.boolean().nullish(),
  XboxServiceConfigID: z.string(),
  XboxSessionTemplateName: z.string(),
  localizedSessionName: z.record(z.any()).nullish()
})

export interface NativeSessionSetting extends z.TypeOf<typeof NativeSessionSetting> {}
