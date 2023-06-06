/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { UserStatCycleItemInfo } from './UserStatCycleItemInfo.js'

export const UserStatCycleItemPagingSlicedResult = z.object({ data: z.array(UserStatCycleItemInfo), paging: Paging.nullish() })

export interface UserStatCycleItemPagingSlicedResult extends z.TypeOf<typeof UserStatCycleItemPagingSlicedResult> {}
