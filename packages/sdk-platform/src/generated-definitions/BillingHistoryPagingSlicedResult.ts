/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingHistoryInfo } from './BillingHistoryInfo.js'
import { Paging } from './Paging.js'

export const BillingHistoryPagingSlicedResult = z.object({ data: z.array(BillingHistoryInfo), paging: Paging.nullish() })

export interface BillingHistoryPagingSlicedResult extends z.TypeOf<typeof BillingHistoryPagingSlicedResult> {}
