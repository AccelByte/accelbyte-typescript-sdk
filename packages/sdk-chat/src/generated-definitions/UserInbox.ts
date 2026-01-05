/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInbox = z.object({ keep: z.boolean(), readAt: z.number().int(), userId: z.string() })

export interface UserInbox extends z.TypeOf<typeof UserInbox> {}
