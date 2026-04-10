/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserInvitationHistory } from './UserInvitationHistory.js'

export const NamespaceInvitationHistoryUserV4Response = z.object({ data: z.array(UserInvitationHistory), paging: PaginationV3 })

export interface NamespaceInvitationHistoryUserV4Response extends z.TypeOf<typeof NamespaceInvitationHistoryUserV4Response> {}
