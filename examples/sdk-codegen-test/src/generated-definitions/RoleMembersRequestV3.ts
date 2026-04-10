/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleMemberV3 } from './RoleMemberV3.js'

export const RoleMembersRequestV3 = z.object({ members: z.array(RoleMemberV3) })

export interface RoleMembersRequestV3 extends z.TypeOf<typeof RoleMembersRequestV3> {}
