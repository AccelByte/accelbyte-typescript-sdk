/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PaginationV3 } from './PaginationV3'

export const LinkingHistoryResponseWithPaginationV3 = z.object({
  data: z.array(z.string()),
  paging: PaginationV3,
  totalData: z.number().int()
})

export type LinkingHistoryResponseWithPaginationV3 = z.TypeOf<typeof LinkingHistoryResponseWithPaginationV3>
