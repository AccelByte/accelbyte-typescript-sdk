/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ModuleReference } from './ModuleReference.js'

export const FeatureReference = z.object({
  feature: z.enum(['CAMPAIGN', 'CATALOG', 'DLC', 'ENTITLEMENT', 'IAP', 'REWARD']).nullish(),
  references: z.array(ModuleReference).nullish()
})

export interface FeatureReference extends z.TypeOf<typeof FeatureReference> {}
