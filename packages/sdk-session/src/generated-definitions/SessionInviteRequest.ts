/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SessionInviteRequest = z.object({ metadata: z.record(z.string()).nullish(), platformID: z.string(), userID: z.string() })

export interface SessionInviteRequest extends z.TypeOf<typeof SessionInviteRequest> {}
