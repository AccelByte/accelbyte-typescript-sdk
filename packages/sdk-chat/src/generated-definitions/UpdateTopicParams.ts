/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateTopicParams = z.object({ description: z.string(), isJoinable: z.boolean(), name: z.string() })

export interface UpdateTopicParams extends z.TypeOf<typeof UpdateTopicParams> {}
