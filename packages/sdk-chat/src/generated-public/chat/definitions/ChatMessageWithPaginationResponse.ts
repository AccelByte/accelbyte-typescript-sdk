/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChatMessageResponse } from './ChatMessageResponse'
import { Pagination } from './Pagination'

export const ChatMessageWithPaginationResponse = z.object({
  data: z.array(ChatMessageResponse),
  paging: Pagination,
  totalData: z.number().int()
})

export interface ChatMessageWithPaginationResponse extends z.TypeOf<typeof ChatMessageWithPaginationResponse> {}
