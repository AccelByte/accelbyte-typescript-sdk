/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Image } from './Image.js'

export const LocalizedPassInfo = z.object({
  autoEnroll: z.boolean(),
  code: z.string(),
  createdAt: z.string(),
  description: z.string().nullish(),
  displayOrder: z.string(),
  images: z.array(Image).nullish(),
  language: z.string(),
  namespace: z.string(),
  passItemId: z.string(),
  seasonId: z.string(),
  title: z.string().nullish(),
  updatedAt: z.string()
})

export interface LocalizedPassInfo extends z.TypeOf<typeof LocalizedPassInfo> {}
