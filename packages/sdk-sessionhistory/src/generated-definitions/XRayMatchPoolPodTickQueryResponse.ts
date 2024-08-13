/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { XRayMatchPoolPodTickResult } from './XRayMatchPoolPodTickResult.js'

export const XRayMatchPoolPodTickQueryResponse = z.object({ data: z.array(XRayMatchPoolPodTickResult), paging: Pagination })

export interface XRayMatchPoolPodTickQueryResponse extends z.TypeOf<typeof XRayMatchPoolPodTickQueryResponse> {}
