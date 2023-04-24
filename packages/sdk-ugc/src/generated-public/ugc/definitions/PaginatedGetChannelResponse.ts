/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChannelResponse } from './ChannelResponse'
import { PagingCursor } from './PagingCursor'

export const PaginatedGetChannelResponse = z.object({ data: z.array(ChannelResponse), paging: PagingCursor })

export interface PaginatedGetChannelResponse extends z.TypeOf<typeof PaginatedGetChannelResponse> {}
