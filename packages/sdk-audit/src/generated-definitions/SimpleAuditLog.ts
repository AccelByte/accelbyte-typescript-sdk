/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SimpleAuditLog = z.object({
  actionDisplayName: z.string(),
  actionName: z.string(),
  actor: z.string(),
  actorNamespace: z.string(),
  actorType: z.string(),
  category: z.string(),
  categoryDisplayName: z.string(),
  clientId: z.string(),
  deviceId: z.string(),
  id: z.string(),
  ip: z.string(),
  objectId: z.string(),
  objectNamespace: z.string(),
  objectType: z.string(),
  objectTypeDisplayName: z.string(),
  targetUserId: z.string(),
  timestamp: z.string()
})

export interface SimpleAuditLog extends z.TypeOf<typeof SimpleAuditLog> {}
