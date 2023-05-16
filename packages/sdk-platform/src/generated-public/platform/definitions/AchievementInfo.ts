/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AchievementInfo = z.object({
  id: z.string().nullish(),
  name: z.string().nullish(),
  progressState: z.string().nullish(),
  progression: z.record(z.any()).nullish(),
  serviceConfigId: z.string().nullish()
})

export interface AchievementInfo extends z.TypeOf<typeof AchievementInfo> {}
