/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserBaseInfo } from './UserBaseInfo'

export const ListBulkUserResponse = z.object({ data: z.array(UserBaseInfo) })

export type ListBulkUserResponse = z.TypeOf<typeof ListBulkUserResponse>
