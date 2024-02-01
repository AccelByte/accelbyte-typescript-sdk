/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Icon } from './Icon.js'

export const AchievementResponse = z.object({
  achievementCode: z.string(),
  createdAt: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  defaultLanguage: z.string(),
  description: z.record(z.string()),
  global: z.boolean(),
  goalValue: z.number().nullish(),
  hidden: z.boolean(),
  incremental: z.boolean(),
  listOrder: z.number().int(),
  lockedIcons: z.array(Icon),
  name: z.record(z.string()),
  namespace: z.string(),
  statCode: z.string().nullish(),
  status: z.string().nullish(),
  tags: z.array(z.string()),
  unlockedIcons: z.array(Icon),
  updatedAt: z.string()
})

export interface AchievementResponse extends z.TypeOf<typeof AchievementResponse> {}
