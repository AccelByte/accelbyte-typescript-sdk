/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ActionDeleteTopicResult = z.object({ processed: z.number().int(), topicId: z.string() })

export interface ActionDeleteTopicResult extends z.TypeOf<typeof ActionDeleteTopicResult> {}
