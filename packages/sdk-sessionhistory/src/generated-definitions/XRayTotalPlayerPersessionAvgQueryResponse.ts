/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TotalPlayerPersession } from './TotalPlayerPersession.js'

export const XRayTotalPlayerPersessionAvgQueryResponse = z.object({ data: z.array(TotalPlayerPersession) })

export interface XRayTotalPlayerPersessionAvgQueryResponse extends z.TypeOf<typeof XRayTotalPlayerPersessionAvgQueryResponse> {}
