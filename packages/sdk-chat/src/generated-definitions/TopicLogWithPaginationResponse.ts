/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TopicLogItem } from './TopicLogItem.js'

export const TopicLogWithPaginationResponse = z.object({ data: z.array(TopicLogItem), paging: Pagination })

export interface TopicLogWithPaginationResponse extends z.TypeOf<typeof TopicLogWithPaginationResponse> {}
