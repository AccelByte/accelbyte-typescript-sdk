/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GroupMember = z.object({ memberRoleId: z.array(z.string()), userId: z.string() })

export interface GroupMember extends z.TypeOf<typeof GroupMember> {}
