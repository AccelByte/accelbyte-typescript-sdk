/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPlatformMetadata = z.object({
  metadata: z.record(z.any()),
  namespace: z.string(),
  platformUserId: z.string(),
  userId: z.string()
})

export interface UserPlatformMetadata extends z.TypeOf<typeof UserPlatformMetadata> {}
