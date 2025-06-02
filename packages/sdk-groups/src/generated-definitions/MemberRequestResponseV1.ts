/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MemberRequestResponseV1 = z.object({ groupId: z.string(), requestType: z.string(), userId: z.string() })

export interface MemberRequestResponseV1 extends z.TypeOf<typeof MemberRequestResponseV1> {}
