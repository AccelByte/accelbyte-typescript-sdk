/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentInfo } from './FulfillmentInfo.js'
import { Paging } from './Paging.js'

export const FulfillmentPagingSlicedResult = z.object({ data: z.array(FulfillmentInfo), paging: Paging.nullish() })

export interface FulfillmentPagingSlicedResult extends z.TypeOf<typeof FulfillmentPagingSlicedResult> {}
