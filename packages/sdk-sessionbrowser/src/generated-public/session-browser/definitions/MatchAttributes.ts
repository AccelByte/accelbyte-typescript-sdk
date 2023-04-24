/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchAttributes = z.object({ first_ticket_created_at: z.number().int() })

export interface MatchAttributes extends z.TypeOf<typeof MatchAttributes> {}
