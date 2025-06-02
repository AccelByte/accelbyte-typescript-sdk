/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'

export const DlcItemConfigHistoryInfo = z.object({
  autoUpdate: z.boolean().nullish(),
  createdAt: z.string().nullish(),
  dlcId: z.string().nullish(),
  id: z.string().nullish(),
  namespace: z.string().nullish(),
  rewards: z.array(PlatformReward).nullish(),
  rvn: z.number().int().nullish(),
  updatedAt: z.string().nullish()
})

export interface DlcItemConfigHistoryInfo extends z.TypeOf<typeof DlcItemConfigHistoryInfo> {}
