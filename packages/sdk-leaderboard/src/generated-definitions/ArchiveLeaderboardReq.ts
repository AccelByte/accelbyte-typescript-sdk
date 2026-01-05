/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ArchiveLeaderboardReq = z.object({ leaderboardCodes: z.array(z.string()), limit: z.number().int(), slug: z.string() })

export interface ArchiveLeaderboardReq extends z.TypeOf<typeof ArchiveLeaderboardReq> {}
