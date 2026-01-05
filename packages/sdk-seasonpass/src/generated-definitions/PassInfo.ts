/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const PassInfo = z.object({
  autoEnroll: z.boolean(),
  code: z.string(),
  createdAt: z.string(),
  displayOrder: z.string(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization),
  namespace: z.string(),
  passItemId: z.string(),
  passItemName: z.string(),
  seasonId: z.string(),
  updatedAt: z.string()
})

export interface PassInfo extends z.TypeOf<typeof PassInfo> {}
