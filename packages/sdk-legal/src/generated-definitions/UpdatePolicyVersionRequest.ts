/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyVersionRequest = z.object({ description: z.string(), displayVersion: z.string(), isCommitted: z.boolean() })

export interface UpdatePolicyVersionRequest extends z.TypeOf<typeof UpdatePolicyVersionRequest> {}
