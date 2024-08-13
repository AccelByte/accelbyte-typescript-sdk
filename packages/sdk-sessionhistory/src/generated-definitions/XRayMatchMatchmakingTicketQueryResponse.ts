/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchMatchmakingTicket } from './MatchMatchmakingTicket.js'

export const XRayMatchMatchmakingTicketQueryResponse = z.object({ data: z.array(MatchMatchmakingTicket) })

export interface XRayMatchMatchmakingTicketQueryResponse extends z.TypeOf<typeof XRayMatchMatchmakingTicketQueryResponse> {}
