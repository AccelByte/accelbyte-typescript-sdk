/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderInfo } from './OrderInfo.js'
import { Paging } from './Paging.js'

export const OrderPagingSlicedResult = z.object({ data: z.array(OrderInfo), paging: Paging.nullish() })

export interface OrderPagingSlicedResult extends z.TypeOf<typeof OrderPagingSlicedResult> {}
