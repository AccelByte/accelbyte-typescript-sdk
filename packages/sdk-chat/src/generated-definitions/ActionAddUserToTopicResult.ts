/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ActionAddUserToTopicResult = z.object({ processed: z.number().int(), topicId: z.string(), userId: z.string() })

export interface ActionAddUserToTopicResult extends z.TypeOf<typeof ActionAddUserToTopicResult> {}
