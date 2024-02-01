/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserInvitationResponseV1 = z.object({ groupId: z.string(), userId: z.string() })

export interface UserInvitationResponseV1 extends z.TypeOf<typeof UserInvitationResponseV1> {}
