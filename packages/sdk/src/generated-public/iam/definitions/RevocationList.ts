/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FilterJson } from './FilterJson'
import { UserRevocationListRecord } from './UserRevocationListRecord'

export const RevocationList = z.object({ revoked_tokens: FilterJson, revoked_users: z.array(UserRevocationListRecord) })

export type RevocationList = z.TypeOf<typeof RevocationList>
