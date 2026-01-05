/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImportStoreCategoryInfo = z.object({
  categoryId: z.string().nullish(),
  categoryPath: z.string().nullish(),
  namespace: z.string().nullish()
})

export interface ImportStoreCategoryInfo extends z.TypeOf<typeof ImportStoreCategoryInfo> {}
