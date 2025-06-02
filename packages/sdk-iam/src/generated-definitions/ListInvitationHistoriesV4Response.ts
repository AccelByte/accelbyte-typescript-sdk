/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InvitationHistoryResponse } from './InvitationHistoryResponse.js'
import { PaginationV3 } from './PaginationV3.js'

export const ListInvitationHistoriesV4Response = z.object({ data: z.array(InvitationHistoryResponse), paging: PaginationV3 })

export interface ListInvitationHistoriesV4Response extends z.TypeOf<typeof ListInvitationHistoriesV4Response> {}
