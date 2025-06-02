/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleMember } from './RoleMember.js'

export const RoleMembersResponse = z.object({ Members: z.array(RoleMember) })

export interface RoleMembersResponse extends z.TypeOf<typeof RoleMembersResponse> {}
