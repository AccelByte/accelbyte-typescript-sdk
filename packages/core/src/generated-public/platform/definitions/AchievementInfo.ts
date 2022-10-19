/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AchievementInfo = z.object({
  id: z.string().nullish(),
  serviceConfigId: z.string().nullish(),
  name: z.string().nullish(),
  progressState: z.string().nullish(),
  progression: z.record(z.any()).nullish()
})

export type AchievementInfo = z.TypeOf<typeof AchievementInfo>
