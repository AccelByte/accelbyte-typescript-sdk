/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChannelTopicSummaryResponse = z.object({ totalChannel: z.number().int(), totalShard: z.number().int() })

export interface ChannelTopicSummaryResponse extends z.TypeOf<typeof ChannelTopicSummaryResponse> {}
