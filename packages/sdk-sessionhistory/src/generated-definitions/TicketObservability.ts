/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TicketData } from './TicketData.js'

export const TicketObservability = z.object({ ticket: TicketData })

export interface TicketObservability extends z.TypeOf<typeof TicketObservability> {}
