/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FixedPeriodRotationConfig } from './FixedPeriodRotationConfig.js'
import { ItemNaming } from './ItemNaming.js'
import { Localization } from './Localization.js'
import { SectionItem } from './SectionItem.js'

export const FullSectionInfo = z.object({
  active: z.boolean(),
  createdAt: z.string(),
  displayOrder: z.number().int().nullish(),
  endDate: z.string(),
  ext: z.record(z.any()).nullish(),
  fixedPeriodRotationConfig: FixedPeriodRotationConfig.nullish(),
  itemNamings: z.array(ItemNaming).nullish(),
  items: z.array(SectionItem).nullish(),
  localizations: z.record(Localization),
  name: z.string(),
  namespace: z.string(),
  rotationType: z.enum(['CUSTOM', 'FIXED_PERIOD', 'NONE']).nullish(),
  sectionId: z.string(),
  startDate: z.string(),
  updatedAt: z.string(),
  viewId: z.string().nullish(),
  viewName: z.string().nullish()
})

export interface FullSectionInfo extends z.TypeOf<typeof FullSectionInfo> {}
