/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreatedMatchmakingTicket } from './CreatedMatchmakingTicket.js'

export const XRayCreatedMatchmakingTicketQueryResponse = z.object({ data: z.array(CreatedMatchmakingTicket) })

export interface XRayCreatedMatchmakingTicketQueryResponse extends z.TypeOf<typeof XRayCreatedMatchmakingTicketQueryResponse> {}
