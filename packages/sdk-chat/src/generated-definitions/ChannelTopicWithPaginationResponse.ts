/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChannelTopicResponse } from './ChannelTopicResponse.js'
import { Pagination } from './Pagination.js'

export const ChannelTopicWithPaginationResponse = z.object({
  data: z.array(ChannelTopicResponse),
  paging: Pagination,
  totalData: z.number().int()
})

export interface ChannelTopicWithPaginationResponse extends z.TypeOf<typeof ChannelTopicWithPaginationResponse> {}
