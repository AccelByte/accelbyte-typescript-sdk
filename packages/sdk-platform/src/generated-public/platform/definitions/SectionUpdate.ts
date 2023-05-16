/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FixedPeriodRotationConfig } from './FixedPeriodRotationConfig.js'
import { Localization } from './Localization.js'
import { SectionItem } from './SectionItem.js'

export const SectionUpdate = z.object({
  active: z.boolean().nullish(),
  displayOrder: z.number().int().nullish(),
  endDate: z.string(),
  ext: z.record(z.any()).nullish(),
  fixedPeriodRotationConfig: FixedPeriodRotationConfig.nullish(),
  items: z.array(SectionItem).nullish(),
  localizations: z.record(Localization),
  name: z.string(),
  rotationType: z.enum(['CUSTOM', 'FIXED_PERIOD', 'NONE']).nullish(),
  startDate: z.string(),
  viewId: z.string().nullish()
})

export interface SectionUpdate extends z.TypeOf<typeof SectionUpdate> {}
