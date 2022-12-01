/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserInvitationV3 } from './UserInvitationV3'

export const InviteUserResponseV3 = z.object({ data: z.array(UserInvitationV3) })

export type InviteUserResponseV3 = z.TypeOf<typeof InviteUserResponseV3>
