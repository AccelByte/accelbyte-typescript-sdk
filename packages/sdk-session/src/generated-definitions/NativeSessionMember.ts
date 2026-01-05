/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeSessionMember = z.object({ platformID: z.string(), platformUserID: z.string(), userID: z.string() })

export interface NativeSessionMember extends z.TypeOf<typeof NativeSessionMember> {}
