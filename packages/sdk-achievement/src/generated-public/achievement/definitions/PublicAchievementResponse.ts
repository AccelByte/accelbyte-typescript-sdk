/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Icon } from './Icon.js'

export const PublicAchievementResponse = z.object({
  achievementCode: z.string(),
  createdAt: z.string(),
  customAttributes: z.record(z.any()).nullish(),
  description: z.string(),
  global: z.boolean(),
  goalValue: z.number().nullish(),
  hidden: z.boolean(),
  incremental: z.boolean(),
  listOrder: z.number().int(),
  lockedIcons: z.array(Icon),
  name: z.string(),
  namespace: z.string(),
  statCode: z.string().nullish(),
  status: z.string().nullish(),
  tags: z.array(z.string()),
  unlockedIcons: z.array(Icon),
  updatedAt: z.string()
})

export interface PublicAchievementResponse extends z.TypeOf<typeof PublicAchievementResponse> {}
