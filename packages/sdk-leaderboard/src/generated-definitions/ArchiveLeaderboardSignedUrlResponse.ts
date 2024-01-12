/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ArchiveLeaderboardSignedUrlResponse = z.object({ leaderboardCode: z.string(), url: z.string() })

export interface ArchiveLeaderboardSignedUrlResponse extends z.TypeOf<typeof ArchiveLeaderboardSignedUrlResponse> {}
