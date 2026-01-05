/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminPlayerRecordKeyInfo = z.object({ key: z.string(), user_id: z.string() })

export interface AdminPlayerRecordKeyInfo extends z.TypeOf<typeof AdminPlayerRecordKeyInfo> {}
