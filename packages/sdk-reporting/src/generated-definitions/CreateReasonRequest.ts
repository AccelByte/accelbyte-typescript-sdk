/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateReasonRequest = z.object({ description: z.string(), groupIds: z.array(z.string()), title: z.string() })

export interface CreateReasonRequest extends z.TypeOf<typeof CreateReasonRequest> {}
