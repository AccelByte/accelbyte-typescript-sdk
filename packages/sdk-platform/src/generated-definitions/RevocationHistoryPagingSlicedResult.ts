/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { RevocationHistoryInfo } from './RevocationHistoryInfo.js'

export const RevocationHistoryPagingSlicedResult = z.object({ data: z.array(RevocationHistoryInfo), paging: Paging.nullish() })

export interface RevocationHistoryPagingSlicedResult extends z.TypeOf<typeof RevocationHistoryPagingSlicedResult> {}
