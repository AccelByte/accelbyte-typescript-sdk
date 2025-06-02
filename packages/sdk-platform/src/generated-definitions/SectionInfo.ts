/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemInfo } from './ItemInfo.js'

export const SectionInfo = z.object({
  active: z.boolean(),
  createdAt: z.string(),
  currentRotationExpireAt: z.string().nullish(),
  currentRotationItems: z.array(ItemInfo).nullish(),
  description: z.string().nullish(),
  displayOrder: z.number().int().nullish(),
  endDate: z.string(),
  ext: z.record(z.any()).nullish(),
  localExt: z.record(z.any()).nullish(),
  longDescription: z.string().nullish(),
  name: z.string(),
  namespace: z.string(),
  sectionId: z.string(),
  startDate: z.string(),
  title: z.string(),
  updatedAt: z.string(),
  viewId: z.string()
})

export interface SectionInfo extends z.TypeOf<typeof SectionInfo> {}
