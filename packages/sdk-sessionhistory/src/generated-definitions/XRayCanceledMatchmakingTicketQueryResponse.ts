/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CanceledMatchmakingTicket } from './CanceledMatchmakingTicket.js'

export const XRayCanceledMatchmakingTicketQueryResponse = z.object({ data: z.array(CanceledMatchmakingTicket) })

export interface XRayCanceledMatchmakingTicketQueryResponse extends z.TypeOf<typeof XRayCanceledMatchmakingTicketQueryResponse> {}
