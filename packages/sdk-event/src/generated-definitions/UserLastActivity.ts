/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserLastActivity = z.object({ LastActivityTime: z.string(), Namespace: z.string(), UserID: z.string() })

export interface UserLastActivity extends z.TypeOf<typeof UserLastActivity> {}
