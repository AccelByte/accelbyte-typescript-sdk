/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OrderInfo } from './OrderInfo'
import { Paging } from './Paging'

export const OrderPagingSlicedResult = z.object({ data: z.array(OrderInfo), paging: Paging.nullish() })

export type OrderPagingSlicedResult = z.TypeOf<typeof OrderPagingSlicedResult>
