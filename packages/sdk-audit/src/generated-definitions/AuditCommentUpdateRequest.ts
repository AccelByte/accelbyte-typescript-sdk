/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AuditCommentUpdateRequest = z.object({ comment: z.string() })

export interface AuditCommentUpdateRequest extends z.TypeOf<typeof AuditCommentUpdateRequest> {}
