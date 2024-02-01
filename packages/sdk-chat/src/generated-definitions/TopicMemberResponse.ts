/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TopicMemberResponse = z.object({ isAdmin: z.boolean(), isBanned: z.boolean(), shardId: z.string(), userId: z.string() })

export interface TopicMemberResponse extends z.TypeOf<typeof TopicMemberResponse> {}
