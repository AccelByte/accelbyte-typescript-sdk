/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentHistoryInfo } from './FulfillmentHistoryInfo.js'
import { Paging } from './Paging.js'

export const FulfillmentHistoryPagingSlicedResult = z.object({ data: z.array(FulfillmentHistoryInfo), paging: Paging.nullish() })

export interface FulfillmentHistoryPagingSlicedResult extends z.TypeOf<typeof FulfillmentHistoryPagingSlicedResult> {}
