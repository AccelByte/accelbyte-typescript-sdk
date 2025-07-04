/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRevocationListRecord = z.object({ id: z.string(), revoked_at: z.string() })

export interface UserRevocationListRecord extends z.TypeOf<typeof UserRevocationListRecord> {}
