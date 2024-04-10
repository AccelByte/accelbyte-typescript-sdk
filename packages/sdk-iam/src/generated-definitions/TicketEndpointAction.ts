/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketEndpointAction = z.object({ action: z.string(), href: z.string() })

export interface TicketEndpointAction extends z.TypeOf<typeof TicketEndpointAction> {}
