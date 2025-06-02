/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeleteBulkLeaderboardFailedResp } from './DeleteBulkLeaderboardFailedResp.js'

export const DeleteBulkLeaderboardsResp = z.object({ failed: z.array(DeleteBulkLeaderboardFailedResp) })

export interface DeleteBulkLeaderboardsResp extends z.TypeOf<typeof DeleteBulkLeaderboardsResp> {}
