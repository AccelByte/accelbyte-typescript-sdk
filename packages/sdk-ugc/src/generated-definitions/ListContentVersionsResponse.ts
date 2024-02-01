/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ContentVersionResponse } from './ContentVersionResponse.js'

export const ListContentVersionsResponse = z.object({ data: z.array(ContentVersionResponse) })

export interface ListContentVersionsResponse extends z.TypeOf<typeof ListContentVersionsResponse> {}
