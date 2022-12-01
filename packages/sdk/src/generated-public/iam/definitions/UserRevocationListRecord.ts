/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserRevocationListRecord = z.object({ id: z.string(), revoked_at: z.string() })

export type UserRevocationListRecord = z.TypeOf<typeof UserRevocationListRecord>
