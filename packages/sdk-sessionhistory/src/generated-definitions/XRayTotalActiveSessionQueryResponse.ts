/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TotalActiveSession } from './TotalActiveSession.js'

export const XRayTotalActiveSessionQueryResponse = z.object({ data: z.array(TotalActiveSession) })

export interface XRayTotalActiveSessionQueryResponse extends z.TypeOf<typeof XRayTotalActiveSessionQueryResponse> {}
