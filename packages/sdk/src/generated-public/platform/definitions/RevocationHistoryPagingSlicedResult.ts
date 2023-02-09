/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { RevocationHistoryInfo } from './RevocationHistoryInfo'

export const RevocationHistoryPagingSlicedResult = z.object({ data: z.array(RevocationHistoryInfo), paging: Paging.nullish() })

export type RevocationHistoryPagingSlicedResult = z.TypeOf<typeof RevocationHistoryPagingSlicedResult>
