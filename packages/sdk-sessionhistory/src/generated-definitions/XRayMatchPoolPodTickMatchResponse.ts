/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventMatchHistory } from './EventMatchHistory.js'

export const XRayMatchPoolPodTickMatchResponse = z.object({ data: z.array(EventMatchHistory) })

export interface XRayMatchPoolPodTickMatchResponse extends z.TypeOf<typeof XRayMatchPoolPodTickMatchResponse> {}
