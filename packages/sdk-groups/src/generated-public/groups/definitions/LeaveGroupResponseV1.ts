/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LeaveGroupResponseV1 = z.object({ groupId: z.string(), userId: z.string() })

export interface LeaveGroupResponseV1 extends z.TypeOf<typeof LeaveGroupResponseV1> {}
