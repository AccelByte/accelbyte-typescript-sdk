/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { UserAccountEvent } from './UserAccountEvent.js'

export const PaginatedAccountEventResponse = z.object({ data: z.array(UserAccountEvent), paging: Paging })

export interface PaginatedAccountEventResponse extends z.TypeOf<typeof PaginatedAccountEventResponse> {}
