/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeSessionSetting = z.object({
  PSNServiceLabel: z.number().int(),
  PSNSupportedPlatforms: z.array(z.string()),
  SessionTitle: z.string(),
  ShouldSync: z.boolean().nullish(),
  XboxServiceConfigID: z.string(),
  XboxSessionTemplateName: z.string()
})

export interface NativeSessionSetting extends z.TypeOf<typeof NativeSessionSetting> {}
