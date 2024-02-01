/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ResultAttributeRequest } from './ResultAttributeRequest.js'

export const PlayerResultRequest = z.object({ results: z.array(ResultAttributeRequest), user_id: z.string() })

export interface PlayerResultRequest extends z.TypeOf<typeof PlayerResultRequest> {}
