/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StoreUpdate = z.object({
  title: z.string(),
  description: z.string().nullish(),
  supportedLanguages: z.array(z.string()).nullish(),
  supportedRegions: z.array(z.string()).nullish(),
  defaultRegion: z.string().nullish(),
  defaultLanguage: z.string().nullish()
})

export type StoreUpdate = z.TypeOf<typeof StoreUpdate>
