/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FixedPeriodRotationConfig } from './FixedPeriodRotationConfig.js'
import { Localization } from './Localization.js'
import { SectionItem } from './SectionItem.js'

export const SectionCreate = z.object({
  name: z.string(),
  localizations: z.record(Localization),
  active: z.boolean().nullish(),
  startDate: z.string(),
  endDate: z.string(),
  items: z.array(SectionItem).nullish(),
  viewId: z.string().nullish(),
  displayOrder: z.number().int().nullish(),
  rotationType: z.enum(['NONE', 'FIXED_PERIOD', 'CUSTOM']).nullish(),
  fixedPeriodRotationConfig: FixedPeriodRotationConfig.nullish(),
  ext: z.record(z.any()).nullish()
})

export interface SectionCreate extends z.TypeOf<typeof SectionCreate> {}
