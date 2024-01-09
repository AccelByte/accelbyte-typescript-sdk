/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreUpdate = z.object({
  defaultLanguage: z.string().nullish(),
  defaultRegion: z.string().nullish(),
  description: z.string().nullish(),
  supportedLanguages: z.array(z.string()).nullish(),
  supportedRegions: z.array(z.string()).nullish(),
  title: z.string()
})

export interface StoreUpdate extends z.TypeOf<typeof StoreUpdate> {}
