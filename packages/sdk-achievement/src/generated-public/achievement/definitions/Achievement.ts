/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Icon } from './Icon'

export const Achievement = z.object({
  AchievementCode: z.string(),
  CreatedAt: z.string(),
  CustomAttributes: z.record(z.any()),
  DefaultLanguage: z.string(),
  Description: z.record(z.string()),
  Global: z.boolean(),
  GoalValue: z.number(),
  Hidden: z.boolean(),
  ID: z.string(),
  Incremental: z.boolean(),
  ListOrder: z.number().int(),
  LockedIcons: z.array(Icon),
  Name: z.record(z.string()),
  Namespace: z.string(),
  StatCode: z.string(),
  Tags: z.array(z.string()),
  UnlockedIcons: z.array(Icon),
  UpdatedAt: z.string()
})

export interface Achievement extends z.TypeOf<typeof Achievement> {}
