/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateMemberRoleRequestV1 = z.object({ memberRoleName: z.string() })

export interface UpdateMemberRoleRequestV1 extends z.TypeOf<typeof UpdateMemberRoleRequestV1> {}
