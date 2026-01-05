/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RequestMatchMember = z.object({ user_id: z.string() })

export interface RequestMatchMember extends z.TypeOf<typeof RequestMatchMember> {}
