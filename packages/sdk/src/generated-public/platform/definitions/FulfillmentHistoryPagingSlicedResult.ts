/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentHistoryInfo } from './FulfillmentHistoryInfo'
import { Paging } from './Paging'

export const FulfillmentHistoryPagingSlicedResult = z.object({ data: z.array(FulfillmentHistoryInfo), paging: Paging.nullish() })

export type FulfillmentHistoryPagingSlicedResult = z.TypeOf<typeof FulfillmentHistoryPagingSlicedResult>
