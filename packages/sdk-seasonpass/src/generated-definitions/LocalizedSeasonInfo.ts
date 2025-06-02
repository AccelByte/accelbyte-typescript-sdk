/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { LocalizedPassInfo } from './LocalizedPassInfo.js'
import { RewardInfo } from './RewardInfo.js'
import { Tier } from './Tier.js'

export const LocalizedSeasonInfo = z.object({
  autoClaim: z.boolean(),
  createdAt: z.string(),
  description: z.string().nullish(),
  end: z.string(),
  id: z.string(),
  images: z.array(Image).nullish(),
  language: z.string(),
  name: z.string(),
  namespace: z.string(),
  passCodes: z.array(z.string()).nullish(),
  passes: z.array(LocalizedPassInfo),
  publishedAt: z.string().nullish(),
  rewards: z.record(RewardInfo),
  start: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'RETIRED']),
  tierItemId: z.string(),
  tiers: z.array(Tier),
  title: z.string().nullish(),
  updatedAt: z.string()
})

export interface LocalizedSeasonInfo extends z.TypeOf<typeof LocalizedSeasonInfo> {}
