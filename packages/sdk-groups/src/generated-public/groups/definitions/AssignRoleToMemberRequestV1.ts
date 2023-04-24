/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AssignRoleToMemberRequestV1 = z.object({ userId: z.string() })

export interface AssignRoleToMemberRequestV1 extends z.TypeOf<typeof AssignRoleToMemberRequestV1> {}
