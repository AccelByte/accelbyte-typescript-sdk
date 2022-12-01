/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'
import { UserBanResponseV3 } from './UserBanResponseV3'

export const GetUserBanV3Response = z.object({ data: z.array(UserBanResponseV3), paging: PaginationV3 })

export type GetUserBanV3Response = z.TypeOf<typeof GetUserBanV3Response>
