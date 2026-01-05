/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetListTopicKafkaResponse = z.object({ topicName: z.array(z.string()) })

export interface GetListTopicKafkaResponse extends z.TypeOf<typeof GetListTopicKafkaResponse> {}
