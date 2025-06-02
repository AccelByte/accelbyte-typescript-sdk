/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MessageStats } from './MessageStats.js'

export const GetInboxStatsResponse = z.object({ data: z.array(MessageStats) })

export interface GetInboxStatsResponse extends z.TypeOf<typeof GetInboxStatsResponse> {}
