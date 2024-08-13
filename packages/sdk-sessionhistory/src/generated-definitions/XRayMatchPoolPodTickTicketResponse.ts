/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TicketStatus } from './TicketStatus.js'

export const XRayMatchPoolPodTickTicketResponse = z.object({ data: z.array(TicketStatus) })

export interface XRayMatchPoolPodTickTicketResponse extends z.TypeOf<typeof XRayMatchPoolPodTickTicketResponse> {}
