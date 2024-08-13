/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { XRayTicketResult } from './XRayTicketResult.js'

export const XRayTicketQueryResponse = z.object({ data: z.array(XRayTicketResult), paging: Pagination })

export interface XRayTicketQueryResponse extends z.TypeOf<typeof XRayTicketQueryResponse> {}
