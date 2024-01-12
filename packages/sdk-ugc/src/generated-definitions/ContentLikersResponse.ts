/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContentLikersResponse = z.object({
  contentId: z.string(),
  createdTime: z.string(),
  likedBy: z.string(),
  namespace: z.string()
})

export interface ContentLikersResponse extends z.TypeOf<typeof ContentLikersResponse> {}
