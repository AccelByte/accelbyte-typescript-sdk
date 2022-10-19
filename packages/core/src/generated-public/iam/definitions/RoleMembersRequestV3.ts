/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleMemberV3 } from './RoleMemberV3'

export const RoleMembersRequestV3 = z.object({ members: z.array(RoleMemberV3) })

export type RoleMembersRequestV3 = z.TypeOf<typeof RoleMembersRequestV3>
