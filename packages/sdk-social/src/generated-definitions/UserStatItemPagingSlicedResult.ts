/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { UserStatItemInfo } from './UserStatItemInfo.js'

export const UserStatItemPagingSlicedResult = z.object({ data: z.array(UserStatItemInfo), paging: Paging.nullish() })

export interface UserStatItemPagingSlicedResult extends z.TypeOf<typeof UserStatItemPagingSlicedResult> {}
