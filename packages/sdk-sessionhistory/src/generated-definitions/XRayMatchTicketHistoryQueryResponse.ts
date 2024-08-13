/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XRayMatchTicketHistory } from './XRayMatchTicketHistory.js'

export const XRayMatchTicketHistoryQueryResponse = z.object({ data: z.array(XRayMatchTicketHistory) })

export interface XRayMatchTicketHistoryQueryResponse extends z.TypeOf<typeof XRayMatchTicketHistoryQueryResponse> {}
