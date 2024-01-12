/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Channel } from './Channel.js'
import { Pagination } from './Pagination.js'

export const GetChannelsResponse = z.object({ data: z.array(Channel), pagination: Pagination })

export interface GetChannelsResponse extends z.TypeOf<typeof GetChannelsResponse> {}
