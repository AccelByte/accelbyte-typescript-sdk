/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const FullViewInfo = z.object({
  createdAt: z.string(),
  displayOrder: z.number().int(),
  localizations: z.record(Localization),
  name: z.string(),
  namespace: z.string(),
  updatedAt: z.string(),
  viewId: z.string()
})

export interface FullViewInfo extends z.TypeOf<typeof FullViewInfo> {}
