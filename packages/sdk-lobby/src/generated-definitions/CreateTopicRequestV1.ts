/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTopicRequestV1 = z.object({ description: z.string(), topicName: z.string() })

export interface CreateTopicRequestV1 extends z.TypeOf<typeof CreateTopicRequestV1> {}
