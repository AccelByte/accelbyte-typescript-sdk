/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Icon } from './Icon.js'

export const AchievementRequest = z.object({
  achievementCode: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  defaultLanguage: z.string(),
  description: z.record(z.string()),
  global: z.boolean().nullish(),
  goalValue: z.number(),
  hidden: z.boolean(),
  incremental: z.boolean(),
  lockedIcons: z.array(Icon),
  name: z.record(z.string()),
  statCode: z.string(),
  tags: z.array(z.string()),
  unlockedIcons: z.array(Icon)
})

export interface AchievementRequest extends z.TypeOf<typeof AchievementRequest> {}
