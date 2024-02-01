/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'

export const GetHiddenUserResponse = z.object({ data: z.array(z.string()), paging: Pagination })

export interface GetHiddenUserResponse extends z.TypeOf<typeof GetHiddenUserResponse> {}
