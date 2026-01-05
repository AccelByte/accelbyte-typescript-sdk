/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CancelInvitationGroupResponseV2 = z.object({ groupId: z.string(), userId: z.string() })

export interface CancelInvitationGroupResponseV2 extends z.TypeOf<typeof CancelInvitationGroupResponseV2> {}
