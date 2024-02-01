/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateReasonGroupRequest = z.object({ reasonIds: z.array(z.string()).nullish(), title: z.string() })

export interface CreateReasonGroupRequest extends z.TypeOf<typeof CreateReasonGroupRequest> {}
