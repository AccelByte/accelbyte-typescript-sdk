/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImageUpdate = z.object({
  addedTags: z.array(z.string()),
  isProtected: z.boolean(),
  name: z.string(),
  removedTags: z.array(z.string())
})

export interface ImageUpdate extends z.TypeOf<typeof ImageUpdate> {}
