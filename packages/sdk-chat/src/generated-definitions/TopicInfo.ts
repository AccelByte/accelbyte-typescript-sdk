/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InfoMember } from './InfoMember.js'

export const TopicInfo = z.object({
  createdAt: z.number().int(),
  deletedAt: z.number().int().nullish(),
  id: z.string(),
  members: z.array(InfoMember).nullish(),
  name: z.string(),
  subType: z.string(),
  type: z.string()
})

export interface TopicInfo extends z.TypeOf<typeof TopicInfo> {}
