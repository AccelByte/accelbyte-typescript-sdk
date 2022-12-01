/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreInfo = z.object({
  storeId: z.string(),
  namespace: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  published: z.boolean(),
  supportedLanguages: z.array(z.string()),
  supportedRegions: z.array(z.string()),
  defaultRegion: z.string(),
  defaultLanguage: z.string(),
  publishedTime: z.string().nullish(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type StoreInfo = z.TypeOf<typeof StoreInfo>
