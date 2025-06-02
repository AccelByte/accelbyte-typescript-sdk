/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TagResponse = z.object({
  createdAt: z.string(),
  id: z.string(),
  namespace: z.string(),
  tagName: z.string(),
  updatedAt: z.string()
})

export interface TagResponse extends z.TypeOf<typeof TagResponse> {}
