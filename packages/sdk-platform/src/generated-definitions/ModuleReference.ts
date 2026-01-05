/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemReference } from './ItemReference.js'

export const ModuleReference = z.object({
  module: z
    .enum([
      'CAMPAIGN',
      'CHALLENGE_CONFIGURATIONS',
      'DLC_CONFIGURATION',
      'ENTITLEMENT',
      'ITEM',
      'ITEM_MAPPING',
      'REWARD_CONFIGURATION',
      'SEASON_PASS_CODE',
      'SEASON_PASS_REWARD',
      'SEASON_PASS_TIER',
      'SECTION'
    ])
    .nullish(),
  references: z.array(ItemReference).nullish()
})

export interface ModuleReference extends z.TypeOf<typeof ModuleReference> {}
