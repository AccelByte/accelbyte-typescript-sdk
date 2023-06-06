/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExcessStrategy } from './ExcessStrategy.js'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const SeasonInfo = z.object({
  autoClaim: z.boolean(),
  createdAt: z.string(),
  defaultLanguage: z.string(),
  defaultRequiredExp: z.number().int(),
  draftStoreId: z.string(),
  end: z.string(),
  excessStrategy: ExcessStrategy,
  id: z.string(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization),
  name: z.string(),
  namespace: z.string(),
  passCodes: z.array(z.string()).nullish(),
  publishedAt: z.string().nullish(),
  start: z.string(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'RETIRED']),
  tierItemId: z.string(),
  tierItemName: z.string(),
  updatedAt: z.string()
})

export interface SeasonInfo extends z.TypeOf<typeof SeasonInfo> {}
