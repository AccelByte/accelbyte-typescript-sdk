/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const PassUpdate = z.object({
  autoEnroll: z.boolean().nullish(),
  displayOrder: z.number().int().nullish(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization).nullish(),
  passItemId: z.string().nullish()
})

export interface PassUpdate extends z.TypeOf<typeof PassUpdate> {}
