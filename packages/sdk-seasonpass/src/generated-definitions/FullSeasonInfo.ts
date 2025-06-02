/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { Localization } from './Localization.js'
import { PassInfo } from './PassInfo.js'
import { RewardInfo } from './RewardInfo.js'
import { Tier } from './Tier.js'

export const FullSeasonInfo = z.object({
  id: z.string(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization),
  name: z.string(),
  namespace: z.string(),
  passes: z.array(PassInfo),
  rewards: z.record(RewardInfo),
  tiers: z.array(Tier)
})

export interface FullSeasonInfo extends z.TypeOf<typeof FullSeasonInfo> {}
