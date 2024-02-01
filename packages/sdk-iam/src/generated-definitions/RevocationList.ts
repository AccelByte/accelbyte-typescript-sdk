/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FilterJson } from './FilterJson.js'
import { UserRevocationListRecord } from './UserRevocationListRecord.js'

export const RevocationList = z.object({ revoked_tokens: FilterJson, revoked_users: z.array(UserRevocationListRecord) })

export interface RevocationList extends z.TypeOf<typeof RevocationList> {}
