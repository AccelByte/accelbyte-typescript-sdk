/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTopicRequest = z.object({ description: z.string(), topic: z.string() })

export interface CreateTopicRequest extends z.TypeOf<typeof CreateTopicRequest> {}
