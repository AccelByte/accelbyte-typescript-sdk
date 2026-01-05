/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AuditCommentCreateRequest = z.object({ comment: z.string(), logId: z.string() })

export interface AuditCommentCreateRequest extends z.TypeOf<typeof AuditCommentCreateRequest> {}
