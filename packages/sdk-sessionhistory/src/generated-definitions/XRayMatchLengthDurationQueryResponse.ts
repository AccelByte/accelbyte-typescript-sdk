/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchLengthDuration } from './MatchLengthDuration.js'

export const XRayMatchLengthDurationQueryResponse = z.object({ data: z.array(MatchLengthDuration) })

export interface XRayMatchLengthDurationQueryResponse extends z.TypeOf<typeof XRayMatchLengthDurationQueryResponse> {}
