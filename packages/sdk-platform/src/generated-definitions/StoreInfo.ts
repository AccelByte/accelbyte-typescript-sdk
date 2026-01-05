/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreInfo = z.object({
  createdAt: z.string(),
  defaultLanguage: z.string(),
  defaultRegion: z.string(),
  description: z.string().nullish(),
  namespace: z.string(),
  published: z.boolean(),
  publishedTime: z.string().nullish(),
  storeId: z.string(),
  supportedLanguages: z.array(z.string()),
  supportedRegions: z.array(z.string()),
  title: z.string(),
  updatedAt: z.string()
})

export interface StoreInfo extends z.TypeOf<typeof StoreInfo> {}
