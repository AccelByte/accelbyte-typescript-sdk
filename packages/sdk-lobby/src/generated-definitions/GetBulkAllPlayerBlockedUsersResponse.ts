/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockedPlayerData } from './BlockedPlayerData.js'

export const GetBulkAllPlayerBlockedUsersResponse = z.object({ data: z.record(z.array(BlockedPlayerData)) })

export interface GetBulkAllPlayerBlockedUsersResponse extends z.TypeOf<typeof GetBulkAllPlayerBlockedUsersResponse> {}
