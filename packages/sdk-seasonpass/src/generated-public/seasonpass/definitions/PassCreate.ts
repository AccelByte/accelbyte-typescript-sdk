/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'
import { Localization } from './Localization.js'

export const PassCreate = z.object({
  autoEnroll: z.boolean().nullish(),
  code: z.string(),
  displayOrder: z.number().int(),
  images: z.array(Image).nullish(),
  localizations: z.record(Localization),
  passItemId: z.string()
})

export interface PassCreate extends z.TypeOf<typeof PassCreate> {}
