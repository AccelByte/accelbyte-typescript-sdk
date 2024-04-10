/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserBulkUpdateRequestV3 } from './UserBulkUpdateRequestV3.js'

export const UsersUpdateRequestV3 = z.object({ updateRequest: UserBulkUpdateRequestV3, userIds: z.array(z.string()) })

export interface UsersUpdateRequestV3 extends z.TypeOf<typeof UsersUpdateRequestV3> {}
