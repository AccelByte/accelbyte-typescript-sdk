/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExcessStrategy } from './ExcessStrategy.js'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const SeasonCreate = z.object({
  autoClaim: z.boolean().nullish(),
  defaultLanguage: z.string().nullish(),
  defaultRequiredExp: z.number().int(),
  draftStoreId: z.string(),
  end: z.string(),
  excessStrategy: ExcessStrategy.nullish(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization),
  name: z.string(),
  start: z.string(),
  tierItemId: z.string()
})

export interface SeasonCreate extends z.TypeOf<typeof SeasonCreate> {}
