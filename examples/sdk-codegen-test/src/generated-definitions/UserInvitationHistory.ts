/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInvitationHistory = z.object({ accepted: z.boolean(), invitee: z.string(), updatedAt: z.string() })

export interface UserInvitationHistory extends z.TypeOf<typeof UserInvitationHistory> {}
