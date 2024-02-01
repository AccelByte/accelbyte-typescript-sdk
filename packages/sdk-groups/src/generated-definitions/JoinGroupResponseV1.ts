/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const JoinGroupResponseV1 = z.object({ groupId: z.string(), status: z.string(), userId: z.string() })

export interface JoinGroupResponseV1 extends z.TypeOf<typeof JoinGroupResponseV1> {}
