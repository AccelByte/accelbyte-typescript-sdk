/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResultAttributeResponse } from './ResultAttributeResponse.js'

export const PlayerResultResponse = z.object({ current_score: z.array(ResultAttributeResponse), user_id: z.string() })

export interface PlayerResultResponse extends z.TypeOf<typeof PlayerResultResponse> {}
