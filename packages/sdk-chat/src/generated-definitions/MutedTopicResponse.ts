/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MutedTopicResponse = z.object({ expirationTime: z.number().int(), remainingTime: z.number().int(), topicId: z.string() })

export interface MutedTopicResponse extends z.TypeOf<typeof MutedTopicResponse> {}
