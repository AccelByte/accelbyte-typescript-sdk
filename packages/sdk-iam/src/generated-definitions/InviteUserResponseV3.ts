/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInvitationV3 } from './UserInvitationV3.js'

export const InviteUserResponseV3 = z.object({ data: z.array(UserInvitationV3) })

export interface InviteUserResponseV3 extends z.TypeOf<typeof InviteUserResponseV3> {}
