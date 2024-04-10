/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { Period } from './Period.js'

export const ListPeriodsResponse = z.object({ data: z.array(Period), paging: Pagination })

export interface ListPeriodsResponse extends z.TypeOf<typeof ListPeriodsResponse> {}
