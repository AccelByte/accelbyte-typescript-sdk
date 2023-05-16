/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetSessionHistorySearchResponseItem } from './GetSessionHistorySearchResponseItem.js'
import { Pagination } from './Pagination.js'

export const GetSessionHistorySearchResponse = z.object({ data: z.array(GetSessionHistorySearchResponseItem), pagination: Pagination })

export interface GetSessionHistorySearchResponse extends z.TypeOf<typeof GetSessionHistorySearchResponse> {}
