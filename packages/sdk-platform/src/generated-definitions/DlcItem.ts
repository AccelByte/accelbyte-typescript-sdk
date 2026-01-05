/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformReward } from './PlatformReward.js'

export const DlcItem = z.object({
  autoUpdate: z.boolean().nullish(),
  id: z.string().nullish(),
  rewards: z.array(PlatformReward).nullish(),
  rvn: z.number().int().nullish()
})

export interface DlcItem extends z.TypeOf<typeof DlcItem> {}
