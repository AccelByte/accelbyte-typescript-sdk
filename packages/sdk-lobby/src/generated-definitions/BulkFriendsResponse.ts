/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkFriendsResponse = z.object({ rowsAffected: z.number().int() })

export interface BulkFriendsResponse extends z.TypeOf<typeof BulkFriendsResponse> {}
