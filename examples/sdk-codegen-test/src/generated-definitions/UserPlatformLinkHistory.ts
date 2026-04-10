/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPlatformLinkHistory = z.object({
  action: z.string(),
  actor: z.string(),
  actorType: z.string(),
  createdAt: z.number().int(),
  namespace: z.string(),
  platform: z.string(),
  platformDisplayName: z.string(),
  platformId: z.string(),
  platformUserId: z.string(),
  publisherUserId: z.string()
})

export interface UserPlatformLinkHistory extends z.TypeOf<typeof UserPlatformLinkHistory> {}
