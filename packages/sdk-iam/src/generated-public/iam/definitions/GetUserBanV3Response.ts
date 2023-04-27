/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3.js'
import { UserBanResponseV3 } from './UserBanResponseV3.js'

export const GetUserBanV3Response = z.object({ data: z.array(UserBanResponseV3), paging: PaginationV3 })

export interface GetUserBanV3Response extends z.TypeOf<typeof GetUserBanV3Response> {}
