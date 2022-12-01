/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BillingHistoryInfo } from './BillingHistoryInfo'
import { Paging } from './Paging'

export const BillingHistoryPagingSlicedResult = z.object({ data: z.array(BillingHistoryInfo), paging: Paging.nullish() })

export type BillingHistoryPagingSlicedResult = z.TypeOf<typeof BillingHistoryPagingSlicedResult>
