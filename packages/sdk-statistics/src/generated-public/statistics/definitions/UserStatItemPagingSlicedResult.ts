/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { UserStatItemInfo } from './UserStatItemInfo'

export const UserStatItemPagingSlicedResult = z.object({ data: z.array(UserStatItemInfo), paging: Paging.nullish() })

export interface UserStatItemPagingSlicedResult extends z.TypeOf<typeof UserStatItemPagingSlicedResult> {}
