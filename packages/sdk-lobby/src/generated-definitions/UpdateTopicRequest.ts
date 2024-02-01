/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateTopicRequest = z.object({ description: z.string() })

export interface UpdateTopicRequest extends z.TypeOf<typeof UpdateTopicRequest> {}
