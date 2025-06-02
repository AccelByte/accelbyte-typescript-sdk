/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Localization = z.object({
  description: z.string().nullish(),
  localExt: z.record(z.any()).nullish(),
  longDescription: z.string().nullish(),
  title: z.string()
})

export interface Localization extends z.TypeOf<typeof Localization> {}
