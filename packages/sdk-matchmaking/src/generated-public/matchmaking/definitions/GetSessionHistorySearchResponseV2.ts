/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetSessionHistorySearchResponseItemV2 } from './GetSessionHistorySearchResponseItemV2.js'
import { Pagination } from './Pagination.js'

export const GetSessionHistorySearchResponseV2 = z.object({ data: z.array(GetSessionHistorySearchResponseItemV2), pagination: Pagination })

export interface GetSessionHistorySearchResponseV2 extends z.TypeOf<typeof GetSessionHistorySearchResponseV2> {}
