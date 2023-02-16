/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RoleMember } from './RoleMember'

export const RoleMembersRequest = z.object({ Members: z.array(RoleMember) })

export interface RoleMembersRequest extends z.TypeOf<typeof RoleMembersRequest> {}
