/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FixedPeriodRotationConfig } from './FixedPeriodRotationConfig'
import { ItemNaming } from './ItemNaming'
import { Localization } from './Localization'
import { SectionItem } from './SectionItem'

export const FullSectionInfo = z.object({
  sectionId: z.string(),
  namespace: z.string(),
  viewId: z.string().nullish(),
  viewName: z.string().nullish(),
  name: z.string(),
  localizations: z.record(Localization),
  active: z.boolean(),
  startDate: z.string(),
  endDate: z.string(),
  items: z.array(SectionItem).nullish(),
  itemNamings: z.array(ItemNaming).nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  rotationType: z.enum(['NONE', 'FIXED_PERIOD', 'CUSTOM']).nullish(),
  fixedPeriodRotationConfig: FixedPeriodRotationConfig.nullish(),
  ext: z.record(z.any()).nullish(),
  displayOrder: z.number().int().nullish()
})

export interface FullSectionInfo extends z.TypeOf<typeof FullSectionInfo> {}
