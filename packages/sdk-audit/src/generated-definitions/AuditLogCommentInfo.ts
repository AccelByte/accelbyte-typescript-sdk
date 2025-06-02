/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AuditLogCommentInfo = z.object({
  actorDisplayName: z.string(),
  actorNamespace: z.string(),
  actorUserId: z.string(),
  auditId: z.string(),
  content: z.string(),
  createdAt: z.string(),
  id: z.string(),
  isActorActive: z.boolean(),
  isResourceOwner: z.boolean(),
  objectNamespace: z.string().nullish(),
  updatedAt: z.string().nullish()
})

export interface AuditLogCommentInfo extends z.TypeOf<typeof AuditLogCommentInfo> {}
