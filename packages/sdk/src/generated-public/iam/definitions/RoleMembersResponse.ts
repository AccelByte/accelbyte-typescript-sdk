/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleMember } from './RoleMember'

export const RoleMembersResponse = z.object({ Members: z.array(RoleMember) })

export type RoleMembersResponse = z.TypeOf<typeof RoleMembersResponse>
