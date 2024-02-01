/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChatMessageResponse } from './ChatMessageResponse.js'
import { Pagination } from './Pagination.js'

export const ChatMessageWithPaginationResponse = z.object({
  data: z.array(ChatMessageResponse),
  paging: Pagination,
  totalData: z.number().int()
})

export interface ChatMessageWithPaginationResponse extends z.TypeOf<typeof ChatMessageWithPaginationResponse> {}
