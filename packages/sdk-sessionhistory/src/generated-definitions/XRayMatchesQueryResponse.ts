/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XRayTicketMatchesResult } from './XRayTicketMatchesResult.js'

export const XRayMatchesQueryResponse = z.object({ data: z.array(XRayTicketMatchesResult) })

export interface XRayMatchesQueryResponse extends z.TypeOf<typeof XRayMatchesQueryResponse> {}
