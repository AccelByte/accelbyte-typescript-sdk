/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketAcquireResult = z.object({ values: z.array(z.string()).nullish() })

export type TicketAcquireResult = z.TypeOf<typeof TicketAcquireResult>
