/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExcessStrategy } from './ExcessStrategy.js'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const SeasonUpdate = z.object({
  autoClaim: z.boolean().nullish(),
  defaultLanguage: z.string().nullish(),
  defaultRequiredExp: z.number().int().nullish(),
  draftStoreId: z.string().nullish(),
  end: z.string().nullish(),
  excessStrategy: ExcessStrategy.nullish(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization).nullish(),
  name: z.string().nullish(),
  start: z.string().nullish(),
  tierItemId: z.string().nullish()
})

export interface SeasonUpdate extends z.TypeOf<typeof SeasonUpdate> {}
