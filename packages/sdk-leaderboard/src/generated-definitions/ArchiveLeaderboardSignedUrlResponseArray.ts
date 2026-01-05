/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ArchiveLeaderboardSignedUrlResponse } from './ArchiveLeaderboardSignedUrlResponse.js'

export const ArchiveLeaderboardSignedUrlResponseArray = z.array(ArchiveLeaderboardSignedUrlResponse)

export interface ArchiveLeaderboardSignedUrlResponseArray extends z.TypeOf<typeof ArchiveLeaderboardSignedUrlResponseArray> {}
