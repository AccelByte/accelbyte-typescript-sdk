/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const KickGroupMemberResponseV1 = z.object({ groupId: z.string(), kickedUserId: z.string() })

export interface KickGroupMemberResponseV1 extends z.TypeOf<typeof KickGroupMemberResponseV1> {}
