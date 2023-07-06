/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchTicketResponse = z.object({ matchTicketID: z.string(), queueTime: z.number().int() })

export interface MatchTicketResponse extends z.TypeOf<typeof MatchTicketResponse> {}
