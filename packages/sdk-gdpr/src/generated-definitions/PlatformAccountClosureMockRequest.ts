/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformAccountClosureMockRequest = z.object({
  platformUserId: z.string(),
  sandbox: z.string(),
  startImmediately: z.boolean()
})

export interface PlatformAccountClosureMockRequest extends z.TypeOf<typeof PlatformAccountClosureMockRequest> {}
