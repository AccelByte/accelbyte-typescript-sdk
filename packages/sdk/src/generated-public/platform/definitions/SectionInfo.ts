/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo'

export const SectionInfo = z.object({
  title: z.string(),
  description: z.string().nullish(),
  longDescription: z.string().nullish(),
  sectionId: z.string(),
  namespace: z.string(),
  viewId: z.string(),
  name: z.string(),
  active: z.boolean(),
  startDate: z.string(),
  endDate: z.string(),
  currentRotationItems: z.array(ItemInfo).nullish(),
  currentRotationExpireAt: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  displayOrder: z.number().int().nullish(),
  ext: z.record(z.any()).nullish(),
  localExt: z.record(z.any()).nullish()
})

export interface SectionInfo extends z.TypeOf<typeof SectionInfo> {}
