/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization'

export const FullViewInfo = z.object({
  viewId: z.string(),
  namespace: z.string(),
  name: z.string(),
  displayOrder: z.number().int(),
  localizations: z.record(Localization),
  createdAt: z.string(),
  updatedAt: z.string()
})

export interface FullViewInfo extends z.TypeOf<typeof FullViewInfo> {}
