/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContentLikeResponse = z.object({ contentId: z.string(), likeStatus: z.boolean() })

export interface ContentLikeResponse extends z.TypeOf<typeof ContentLikeResponse> {}
