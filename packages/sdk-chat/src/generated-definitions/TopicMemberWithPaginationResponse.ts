/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { TopicMemberResponse } from './TopicMemberResponse.js'

export const TopicMemberWithPaginationResponse = z.object({
  data: z.array(TopicMemberResponse),
  paging: Pagination,
  totalData: z.number().int()
})

export interface TopicMemberWithPaginationResponse extends z.TypeOf<typeof TopicMemberWithPaginationResponse> {}
