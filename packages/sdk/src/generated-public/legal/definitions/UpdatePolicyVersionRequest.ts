/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdatePolicyVersionRequest = z.object({ displayVersion: z.string(), description: z.string(), isCommitted: z.boolean() })

export type UpdatePolicyVersionRequest = z.TypeOf<typeof UpdatePolicyVersionRequest>
