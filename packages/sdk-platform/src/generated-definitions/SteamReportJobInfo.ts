/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamReportJobInfo = z.object({
  env: z.enum(['LIVE', 'SANDBOX']).nullish(),
  id: z.string().nullish(),
  lastTime: z.string().nullish(),
  namespace: z.string().nullish()
})

export interface SteamReportJobInfo extends z.TypeOf<typeof SteamReportJobInfo> {}
