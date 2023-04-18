/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TicketAcquireResult = z.object({ values: z.array(z.string()).nullish() })

export interface TicketAcquireResult extends z.TypeOf<typeof TicketAcquireResult> {}
