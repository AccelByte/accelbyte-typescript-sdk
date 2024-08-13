/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventMatchHistory } from './EventMatchHistory.js'
import { Pagination } from './Pagination.js'

export const XRayMatchHistorQueryResponse = z.object({ data: z.array(EventMatchHistory), paging: Pagination })

export interface XRayMatchHistorQueryResponse extends z.TypeOf<typeof XRayMatchHistorQueryResponse> {}
